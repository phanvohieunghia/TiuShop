let products = [
    {id: "1", name: "", oldPrice: 190, currentPrice: 200, img: "product1"},
    {id: "2", name: "", oldPrice: 190, currentPrice: 200, img: "product2"},
    {id: "3", name: "", oldPrice: 190, currentPrice: 200, img: "product3"},
    {id: "4", name: "", oldPrice: 190, currentPrice: 200, img: "product4"},
    {id: "5", name: "", oldPrice: 190, currentPrice: 200, img: "product5"},
    {id: "6", name: "", oldPrice: 190, currentPrice: 200, img: "product6"},
    {id: "7", name: "", oldPrice: 190, currentPrice: 200, img: "product7"},
    {id: "8", name: "", oldPrice: 190, currentPrice: 200, img: "product8"},
    {id: "9", name: "", oldPrice: 190, currentPrice: 200, img: "product9"},
    {id: "10", name: "", oldPrice: 190, currentPrice: 200, img: "product10"},
    {id: "11", name: "", oldPrice: 190, currentPrice: 200, img: "product11"},
    {id: "12", name: "", oldPrice: 190, currentPrice: 200, img: "product12"},
    {id: "13", name: "", oldPrice: 190, currentPrice: 200, img: "product13"},
    {id: "14", name: "", oldPrice: 190, currentPrice: 200, img: "product14"},
    {id: "15", name: "", oldPrice: 190, currentPrice: 200, img: "product15"},
    {id: "16", name: "", oldPrice: 190, currentPrice: 200, img: "product16"},
    {id: "17", name: "", oldPrice: 190, currentPrice: 200, img: "product17"},
    {id: "18", name: "", oldPrice: 190, currentPrice: 200, img: "product18"},
    {id: "19", name: "", oldPrice: 190, currentPrice: 200, img: "product19"},
    {id: "20", name: "", oldPrice: 190, currentPrice: 200, img: "product20"},
    {id: "21", name: "", oldPrice: 190, currentPrice: 200, img: "product21"},
    {id: "22", name: "", oldPrice: 190, currentPrice: 200, img: "product22"},
    {id: "23", name: "", oldPrice: 190, currentPrice: 200, img: "product23"},
    {id: "24", name: "", oldPrice: 190, currentPrice: 200, img: "product24"},
    {id: "25", name: "", oldPrice: 190, currentPrice: 200, img: "product25"},
    {id: "26", name: "", oldPrice: 190, currentPrice: 200, img: "product26"},
    {id: "27", name: "", oldPrice: 190, currentPrice: 200, img: "product27"},
    {id: "28", name: "", oldPrice: 190, currentPrice: 200, img: "product28"},
    {id: "29", name: "", oldPrice: 190, currentPrice: 200, img: "product29"},
    {id: "30", name: "", oldPrice: 190, currentPrice: 200, img: "product30"},
    {id: "31", name: "", oldPrice: 190, currentPrice: 200, img: "product31"},
    {id: "32", name: "", oldPrice: 190, currentPrice: 200, img: "product32"},
    {id: "32", name: "", oldPrice: 190, currentPrice: 200, img: "product32"},
]

let currentPage = 1
let perPage = 12
let totalProduct = Math.ceil(products.length / perPage)
let perPost = []


function renderProducts() {
    let htmls = ''
    var rowProduct = products.length / 12;
    console.log(rowProduct)
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    let homeProduct = $('.home-product')

}
// renderProducts()

function renderPagination() {
    const pagination = document.querySelector('.home-pagination')
    let htmls = ''
    htmls += `
        <li class="pag-item pag-first">
            <a href="" class="pag-item__link">
                <i class="pag-item__icon fad fa-chevron-left"></i>
            </a>
        </li> 
    `
    for(i =0; i < totalProduct; i++) {
        htmls += `
        <li class="pag-item">
            <a href="" class="pag-item__link">${i+1}</a>
        </li>
        `
    }
    htmls += `
    <li class="pag-item">
        <a href="" class="pag-item__link">
            <i class="pag-item__icon fad fa-chevron-right"></i>
        </a>
    </li> 
    `
    pagination.innerHTML = htmls
    const pagItems = document.querySelectorAll('.pag-item')
    pagItems[1].classList.add('pag-item--active')
}

renderPagination()