import { renderHeader, renderFooter } from "./main.js"

renderHeader()
renderFooter()

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function hoverRating() {
    let stars = $$('.fas.fa-star')
    let starGolf = $$('.dt-content__rating-gold')
    let num = starGolf.length
    stars.forEach(function(star, index) {
        star.onmouseover = function() {
            stars.forEach(function(star2, index2) {
                if (index2 <= index) {
                    star2.classList.add('dt-content__rating-gold')
                } else {
                    star2.classList.remove('dt-content__rating-gold')
                }
            })
        }
    })
    $('.dt-content__rating').onmouseout = function() {
        stars.forEach(function(star, index) {
            if (index < 4) {
                star.classList.add('dt-content__rating-gold')
            } else {
                star.classList.remove('dt-content__rating-gold')
            }
        })
    }
}

function updateQuantity() {
    let number = 0
    let quantity = $('.dt-content__quantity-2')
    $('.dt-content__quantity-1').onclick = function() {
        if (number != 0) {
            number--
            quantity.innerHTML = number
        }
    }
    $('.dt-content__quantity-3').onclick = function() {
        number++
        quantity.innerHTML = number
    }
}

function sliceLine() {
    const tabs = $$('.tabs-header__item')
    const panes = $$('.tabs-pane__item')
    const tabActive = $('.tabs-header__item.tabs-header__item--active')
    const tabLine = $('.tabs-header__line')
    tabLine.style.left = tabActive.offsetLeft + 'px'
    tabLine.style.width = tabActive.offsetWidth + 'px'
    
    tabs.forEach(function(tab, index) {
        const pane = panes[index]
        tab.onclick = function() {
            $('.tabs-header__item.tabs-header__item--active').classList.remove('tabs-header__item--active')
            $('.tabs-pane__item.tabs-pane__item--active').classList.remove('tabs-pane__item--active')

            tabLine.style.left = this.offsetLeft + 'px'
            tabLine.style.width = this.offsetWidth + 'px'        
            this.classList.add('tabs-header__item--active')
            pane.classList.add('tabs-pane__item--active')
        }
    })
}

hoverRating()
updateQuantity()
sliceLine()
