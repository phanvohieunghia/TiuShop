const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let products = [
    {"id": "1", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product1"},
    {"id": "2", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product2"},
    {"id": "3", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product3"},
    {"id": "4", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product4"},
    {"id": "5", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product5"},
    {"id": "6", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product6"},
    {"id": "7", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product7"},
    {"id": "8", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product8"},
    {"id": "9", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product9"},
    {"id": "10", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product10"},
    {"id": "11", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product11"},
    {"id": "12", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product12"},
    {"id": "13", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product13"},
    {"id": "14", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product14"},
    {"id": "15", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product15"},
    {"id": "16", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product16"},
    {"id": "17", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product17"},
    {"id": "18", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product18"},
    {"id": "19", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product19"},
    {"id": "20", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product20"},
    {"id": "21", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product21"},
    {"id": "22", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product22"},
    {"id": "23", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product23"},
    {"id": "24", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product24"},
    {"id": "25", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product25"},
    {"id": "26", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product26"},
    {"id": "27", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product27"},
    {"id": "28", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product28"},
    {"id": "29", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product29"},
    {"id": "30", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product30"},
    {"id": "31", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product31"},
    {"id": "32", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product32"},
    {"id": "32", "name": "", "oldPrice": 190, "currentPrice": 200, "img": "product32"}

]


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
                        <div class="pd-item__icon-wrap">
                            <i class="fal fa-eye"></i>
                        </div>
                        <div class="pd-item__icon-wrap">
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
            const pagItem = document.querySelector('.pag-item.pag-item--active')
            pagItem.classList.remove('pag-item--active')
            pagItems[index].classList.add('pag-item--active')
            renderPage(index)
            window.scroll(0, 0)
        }
    })
}
renderPage(1)
renderPagination()
activePaginationItem()