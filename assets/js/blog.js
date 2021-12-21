import { renderHeader, renderFooter, renderBreadScrum } from "./main.js";
import { preBlogs } from './data.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

renderHeader()
renderFooter()
renderBreadScrum()

const blogs = preBlogs
function renderBlog() {
    let htmls = ''
    blogs.forEach(function(blog, index) {
        htmls += `
        <div class="grid__row">
            <div class="grid__column-4">
                <div class="bl-item__img" style="background: url('./assets/img/blog/${blog.image}.jpg') right center / cover no-repeat;">
                </div>
            </div>
            <div class="grid__column-8">
                <div class="bl-item__content">
                    <div class="bl-item__name">
                        ${blog.name}
                    </div>
                    <div class="bl-item__date">
                        ${blog.date}
                    </div>
                    <div class="bl-item__text">
                        ${blog.description}
                    </div>
                    <div class="bl-item__read">
                        <a class="bl-item__link btn" href="" >Read more</a>
                    </div>
                </div>
            </div>
        </div>
        `
    })

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