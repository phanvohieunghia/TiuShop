import { renderHeader, renderFooter, renderBreadScrum } from "./main.js";

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

renderHeader()
renderFooter()
renderBreadScrum()

function renderBlog() {
    let htmls = ''
    for(let i =0; i < 8; i++) {
        htmls += `
        <div class="grid__row">
            <div class="grid__column-4">
                <div class="bl-item__img">

                </div>
            </div>
            <div class="grid__column-8">
                <div class="bl-item__content">
                    <div class="bl-item__name">
                        Libero lorem vehicula qunato verbl
                    </div>
                    <div class="bl-item__date">
                        11 September, 2021
                    </div>
                    <div class="bl-item__text">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div class="bl-item__read">
                        <a class="bl-item__link btn" href="" >Read more</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    htmls += `
    <div class="grid__row grid__row-bl-more">
        <div class="grid__column-12">
            <div class="bl-more btn">
                <span class="bl-more__text">
                    More blog
                </span>
                <span class="bl-more__icon">
                    <i class="fad fa-chevron-down"></i>
                </span>
            </div>
        </div>
    </div>
    `
    $('.blog').innerHTML = htmls
}

renderBlog()