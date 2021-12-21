import {preProducts} from './data.js'
import { renderHeader, renderFooter } from './main.js'

renderHeader()
renderFooter()

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let products = preProducts
let perPage = 12
let totalPage = Math.ceil(products.length / perPage)


function renderPage(key) {
    let perPost = []
    let itemRow = 4
    let htmls = ''
    perPost = products.slice(
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
                    <div class="pd-item__name">Short Steve</div>
                    <div class="pd-item__price">
                        <span class="pd-item__price-old">2.000.000đ</span>
                        <span class="pd-item__price-current">999.000đ</span>
                    </div>
                    <div class="pd-item__icon">
                        <div class="pd-item__icon-wrap pd-item__icon-search">
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
            console.log('nghia')
        }
    })
}

function renderPagination() {
    const pagination = document.querySelector('.home-pagination')
    let htmls = ''
    htmls += `
    <li class="pag-item pag-first">
    <a class="pag-item__link">
    <i class="pag-item__icon fad fa-chevron-left"></i>
    </a>
    </li> 
    `
    for(let i = 0; i < totalPage; i++) {
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
                renderPage(index)
            }, 0.5*1000)
        }
    })
}
renderPage(1)
renderPagination()
activePaginationItem()
