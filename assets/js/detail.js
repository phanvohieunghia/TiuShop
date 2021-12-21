import { renderHeader, renderFooter, renderBreadScrum } from "./main.js"
import { preProducts } from "./data.js"
renderHeader()
renderFooter()
renderBreadScrum()

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function hoverRating() {
    let stars = $$('.fas.fa-star')
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


function renderDetailContent() {
    let dataId = sessionStorage.getItem('dataDetail')
    let chooseItem
    preProducts.forEach(function(item , index) {
        if (item.id == dataId) {
            chooseItem = item
        }
    })
    let htmls = ''
    htmls += `
    <div class="grid__column-6">
        <div class="dt-img" style="background-image: url(./assets/img/product/${chooseItem.img}.jpg)">
        </div>
    </div>
    <div class="grid__column-6">
        <div class="dt-content">
            <div class="dt-content__name">
                ${chooseItem.name}
            </div>
            <div class="dt-content__rating">
                <i class="fas fa-star dt-content__rating-1 dt-content__rating-gold"></i>
                <i class="fas fa-star dt-content__rating-2 dt-content__rating-gold"></i>
                <i class="fas fa-star dt-content__rating-3 dt-content__rating-gold"></i>
                <i class="fas fa-star dt-content__rating-4 dt-content__rating-gold"></i>
                <i class="fas fa-star dt-content__rating-5"></i>
            </div>
            <div class="dt-content__old-price">
                ${chooseItem.oldPrice}.000đ
            </div>
            <div class="dt-content__current-price">
            ${chooseItem.currentPrice}.000đ
            </div>
            <div class="dt-content__size">
                <div class="dt-content__size-title">
                    Size
                </div>
                <div class="dt-content__size-content">
                    <span class="dt-content__size-type dt-content__size-s">S</span>
                    <span class="dt-content__size-type dt-content__size-m">M</span>
                    <span class="dt-content__size-type dt-content__size-l">L</span>
                </div>
            </div>
            <div class="dt-content__color">
                <div class="dt-content__color-title">
                    Color
                </div>
                <div class="dt-content__color-content">
                    <span class="dt-content__color-type dt-content__color-1">&nbsp;</span>
                    <span class="dt-content__color-type dt-content__color-2">&nbsp;</span>
                    <span class="dt-content__color-type dt-content__color-3">&nbsp;</span>
                </div>
            </div>
            <div class="dt-content__quantity">
                <div class="dt-content__quantity-title">
                    Unit
                </div>
                <div class="dt-content__quantity-content">
                    <span class="dt-content__quantity-number">
                        <div class="dt-content__quantity-type dt-content__quantity-1">
                            <i class="fal fa-minus"></i>
                        </div>
                        <div class="dt-content__quantity-type dt-content__quantity-2">0</div>
                        <div class="dt-content__quantity-type dt-content__quantity-3">
                            <i class="fal fa-plus"></i>
                        </div>
                    </span>
                    <span class="dt-content__quantity-type dt-content__quantity-cart">Add to Cart</span>
                </div>
            </div>
        </div>
    </div>
    `
    $('.dt-content').innerHTML = htmls

    let htmls2 = ''
    htmls2 = `
    <div class="tabs-header">
        <div class="tabs-header__item tabs-header__item--active">Description</div>
        <div class="tabs-header__item">Review</div>
        <div class="tabs-header__line"></div>
    </div>
    <div class="tabs-pane">
        <div class="tabs-pane__item tabs-pane__item--active">
            <!--  -->
            <div class="tabs-pan__item-h">
                Video In Your Pocket.

            </div>
            <div class="tabs-pane__item-c">
                ${chooseItem.description}
            </div>
            <!--  -->
            <div class="tabs-pan__item-h">
                Cover Flow.
            </div>
            <div class="tabs-pane__item-c">
            ${chooseItem.description}
            </div>
            <!--  -->
            <div class="tabs-pan__item-h">
                Enhanced Interface.
            </div>
            <div class="tabs-pane__item-c">
            ${chooseItem.description}
            </div>
            <!--  -->
            <div class="tabs-pan__item-h">
                Sleek And Colorful.
            </div>
            <div class="tabs-pane__item-c">
            ${chooseItem.description}
            </div>
            <!--  -->
            <div class="tabs-pan__item-h">
                ITunes.
            </div>
            <div class="tabs-pane__item-c">
            ${chooseItem.description}
            </div>
        </div>
        <div class="tabs-pane__item">
            <ul class="tabs-pane__list">
                <li class="tabs-pane__review">
                    <div class="tabs-pane__review-title">
                        <div class="tabs-pane__review-name">
                            Nguyễn Hữu Tài
                        </div>
                        <div class="tabs-pane__review-date">
                            19/12/20221
                        </div>
                    </div>
                    <div class="tabs-pane__review-content">
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </div>
                </li>
                <li class="tabs-pane__review">
                    <div class="tabs-pane__review-title">
                        <div class="tabs-pane__review-name">
                            Chu Nam Thắng
                        </div>
                        <div class="tabs-pane__review-date">
                            20/12/20221
                        </div>
                    </div>
                    <div class="tabs-pane__review-content">
                        When an unknown printer twhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    </div>
                </li>
            </ul>
            <div class="tabs-pane__write-review">
                <div class="tabs-pane__write-review-title">
                    Write A Review
                </div>
                <div class="tabs-pane__write-review-row">
                    <label class="tabs-pane__write-review-row-name">
                        Your name
                    </label>
                    <input type="text" class="tabs-pane__write-review-row-input">
                    </input>
                </div>
                <div class="tabs-pane__write-review-row">
                    <label class="tabs-pane__write-review-row-name">
                        Your review
                    </label>
                    <textarea class="tabs-pane__write-review-row-input" rows="5"></textarea>
                </div>
                <div class="tabs-pane__write-review-row-end">
                    <button class="tabs-pane__write-review-submit">
                        Done
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    $('.tabs').innerHTML = htmls2
}


renderDetailContent()
hoverRating()
updateQuantity()
sliceLine()