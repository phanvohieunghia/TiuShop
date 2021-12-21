import {categories, preProducts} from './data.js'
import { renderHeader, renderFooter, renderBreadScrum } from './main.js'

renderHeader()
renderFooter()
renderBreadScrum()


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let products = preProducts
let perPage = 12
let totalPage = Math.ceil(products.length / perPage)


function renderPage(key, productList) {
    let perPost = []
    let itemRow = 4
    let htmls = ''
    perPost = productList.slice(
        (key - 1) * perPage,
        (key - 1) * perPage + perPage
    )
    perPost.forEach(function(item, index) {
        if (index % itemRow == 0) {
            htmls += `
            <div class="grid__row">
            `
        }
        htmls += `
            <div class="grid__column-3">
                <!-- Product -->
                <div class="pd-item">
                    <div class="pd-item__img" style="background-image: url(./assets/img/product/${item.img}.jpg)"></div>
                    <div class="pd-item__name">${item.name}</div>
                    <div class="pd-item__price">
                        <span class="pd-item__price-old">${item.oldPrice}.000đ</span>
                        <span class="pd-item__price-current">${item.currentPrice}.000đ</span>
                    </div>
                    <div class="pd-item__icon">
                        <div class="pd-item__icon-wrap pd-item__icon-search" data="${item.id}">
                            <i class="fal fa-search"></i>
                        </div>
                        <div class="pd-item__icon-wrap pd-item__icon-cart">
                            <i class="fal fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
        if (index % itemRow == 3) {
            htmls += `
            </div>
            `
        }
    })    
    $('.home-product').innerHTML = htmls
    linkDetailProduct()
}

function linkDetailProduct() {
    $$('.pd-item__icon-search').forEach(function(item, index) {
        item.onclick = function() {
            location.href = '../../detail.html'
            sessionStorage.setItem('dataDetail', item.getAttribute('data'))
        }
    })
}

function renderPagination(number) {
    const pagination = document.querySelector('.home-pagination')
    let htmls = ''
    htmls += `
    <li class="pag-item pag-first">
    <a class="pag-item__link">
    <i class="pag-item__icon fad fa-chevron-left"></i>
    </a>
    </li> 
    `
    for(let i = 0; i < number; i++) {
        htmls += `
        <li class="pag-item">
        <a class="pag-item__link">${i+1}</a>
        </li>
        `
    }
    htmls += `
    <li class="pag-item">
    <a class="pag-item__link">
    <i class="pag-item__icon fad fa-chevron-right"></i>
    </a>
    </li> 
    `
    pagination.innerHTML = htmls
    const pagItems = document.querySelectorAll('.pag-item')
    pagItems[1].classList.add('pag-item--active')
}

function activePaginationItem() {
    const pagItems = $$('.pag-item')
    pagItems.forEach(function(item, index) {
        item.onclick = function () {
            window.scroll(0, 0)
            setTimeout(function () {
                const pagItem = document.querySelector('.pag-item.pag-item--active')
                pagItem.classList.remove('pag-item--active')
                pagItems[index].classList.add('pag-item--active')
                renderPage(index, products)
            }, 0.5*1000)
        }
    })
}

function filterProduct() {
    const categoryItems = $$('.category-item')
    categoryItems.forEach(function(item, index) {
        item.onclick = function() {
            updateBreadcrumbs(categories[index])
            let newProduct = []
            products.forEach(function(item2, i) {
                if (item2.type === categories[index]) {
                    newProduct.push(item2)
                }
            })
            if (index != 0) {
                renderPage(1, newProduct)
                let newTotalPage = Math.ceil(newProduct.length / perPage)
                renderPagination(newTotalPage)
            } else {
                renderPage(1, products)
                renderPagination(totalPage)
            }
        }
    })
}

function updateBreadcrumbs(value) {
    let htmls = ''
    htmls += `
        <a href="./home.html" class="bc-item bc-brand">TiuShop Home Page</a>
        <a class="bc-item bc-slash">/</a>
        <a href="" class="bc-item bc-category">${value}</a>
    `
    $('.breadcrumbs').innerHTML = htmls
}

function showCategory() {
    let htmls = ''
    categories.forEach(function(category, index) {
        htmls += `
        <li class="category-item">
            <a class="category-item__link">${category}</a>
        </li>
        `
    })
    $('.category-list').innerHTML = htmls
}

showCategory()
renderPage(1, products)
renderPagination(totalPage)
activePaginationItem()
filterProduct()