import { renderHeader, renderFooter, renderBreadScrum, toggleMenu } from "./main.js";
import { preBlogs, preBlogType } from './data.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

renderHeader()
renderFooter()
toggleMenu()

// renderBreadScrum()
export function renderBreadScrum2() {
    let htmls = ''
    htmls += `
        <a href="./home.html" class="bc-item bc-brand">TiuShop Home Page</a>
        <a class="bc-item bc-slash">/</a>
        <a href="" class="bc-item bc-category">All Blogs</a>
    `
    $('.breadcrumbs').innerHTML = htmls
}
renderBreadScrum2()
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

    // htmls += `
    // <div class="grid__row grid__row-bl-more">
    //     <div class="grid__column-12">
    //         <div class="bl-more btn">
    //             <span class="bl-more__text">
    //                 More blog
    //             </span>
    //             <span class="bl-more__icon">
    //                 <i class="fad fa-chevron-down"></i>
    //             </span>
    //         </div>
    //     </div>
    // </div>
    // `

    $('.blog').innerHTML = htmls
}

export function showCategory() {
    let htmls = ''
    preBlogType.forEach(function(category, index) {
        htmls += `
        <li class="category-item">
            <a class="category-item__link">${category}</a>
        </li>
        `
    })
    $('.category-list').innerHTML = htmls
}

showCategory()
renderBlog()