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

hoverRating()
updateQuantity()
