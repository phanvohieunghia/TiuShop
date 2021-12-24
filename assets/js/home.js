import {preProducts, preSlỉder} from './data.js'
import { renderHeader, renderFooter, toggleMenu } from './main.js'

renderHeader()
renderFooter()

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var listSlide = preSlỉder
let ranNum = 5
let products = preProducts.slice(ranNum, ranNum + 8)

function getSlider() {
    var html = getSlierString()
    var sliderContent = $('.sd-content')
    sliderContent.innerHTML = html
    var titleSlider = $('.sd-title')
    titleSlider.style.animation = 'changeSliderTitle 0.7s ease-in-out'
    titleSlider.style.opacity = '1'
}

function changeSlider() {
    var mainSlider = $('.sd-content')
    setInterval(function() {
        mainSlider.style.animation = 'changeSlider 1.2s ease-in-out'
        var item = listSlide.shift()
        listSlide.push(item)
        var html = getSlierString()
        var sliderContent = $('.sd-content')
        setTimeout(function() {
            sliderContent.innerHTML = html
            mainSlider.style.animation = ''
            var titleSlider = $('.sd-title')
            titleSlider.style.animation = 'changeSliderTitle 0.7s ease-in-out'
            titleSlider.style.opacity = '1'        
        }, 1.19*1000)
    }, 5*1000)
}

function getSlierString() {
    var html = ''
    listSlide.forEach(function(item, index) {
        html += `
        <div class="sd-item" style="background: url(${item}) right center / cover no-repeat;">
            <div class="sd-title">New Trends</div>
        </div>
        `
    })
    return html
}

function renderProduct() {
    let htmls = ''
    htmls += `
    <div class="grid__row">
    `
    products.forEach(function(item, index) {
        htmls += `
            <div class="grid__column-3 mr-20 grid__column-4-m grid__column-6-s">
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
    })
    htmls += `
    </div>
    `
    $('.home-product').innerHTML = htmls
    linkDetailProduct()
}

function linkDetailProduct() {
    $$('.pd-item__icon-search').forEach(function(item, index) {
        item.onclick = function() {
                sessionStorage.setItem('dataDetail', item.getAttribute('data'))
            location.href = '../../detail.html'
        }
    })
}


getSlider()
changeSlider()
renderProduct()
toggleMenu()
