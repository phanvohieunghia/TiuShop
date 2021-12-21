const $_main = document.querySelector.bind(document)
const $$_main = document.querySelectorAll.bind(document)

export function renderHeader() {
    let htmls = ''
    htmls += `
    <div class="hd-brand">
        <a href="./home.html" class="hd-brand__link">
            <img class="hd-brand__logo" src="./assets/img/tuishop_logo_full.png" alt="">
        </a>
    </div>
    <nav class="hd-navigation">
        <ul class="hd-navigation__list">
            <li class="hd-navigation__item">
                <a href="./home.html" class="hd-navigation__item-link">
                    Home
                </a>
                <div class="hd-navigation__item-decor"></div>
            </li>
            <li class="hd-navigation__item">
                <a href="./shop.html" class="hd-navigation__item-link">
                    Shop
                </a>
                <div class="hd-navigation__item-decor"></div>
            </li>
            <li class="hd-navigation__item">
                <a href=".home.html" class="hd-navigation__item-link">
                    Blog
                </a>
                <div class="hd-navigation__item-decor"></div>
            </li>
            <li class="hd-navigation__item">
                <a href="./Home.html" class="hd-navigation__item-link">
                    Contact
                </a>
                <div class="hd-navigation__item-decor"></div>
                </li>
        </ul>
    </nav>
    <div class="hd-search">
        <div class="hd-search__wrap">
            <i class="hd-search__icon fad fa-search"></i>
            <input class="hd-search__text" type="text" placeholder="Search at TuiShop">
        </div>
    </div>
    <div class="hd-icon">
        <i class="hd-icon__item fad fa-cart-plus">
            <span class="hd-icon__item-notification">3</span>
        </i>
        <i class="hd-icon__item fad fa-user"></i>
    </div>
    `
    $_main('.header').innerHTML = htmls
}

export function renderFooter() {
    let htmls = ''
    htmls += `
    <div class="ft-list">
        <div class="ft-item ft-information">
            <div class="ft-title ft-information__title">
                &nbsp;
                <span class="ft-information__brand"></span>
            </div>    
            <div class="ft-content ft-information__content">
                <ul class="ft-content__list">
                    <li class="ft-content__item">
                        <i class="ft-content__icon fad fa-map-marker"></i>
                        Gần Trường Đại học Công nghệ Thông tin.Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.Hồ Chí Minh.
                    </li>    
                    <li class="ft-content__item">
                        <i class="ft-content__icon fad fa-phone"></i>
                        +01 2222 365 /(+91) 01 2345 6789
                    </li>    
                    <li class="ft-content__item">
                        <i class="ft-content__icon fad fa-envelope"></i>
                        phvohieunghia@gmail.com
                    </li>    
                    <li class="ft-content__item">
                        <a href="" class="ft-content__social">
                            <i class="ft-content__social-icon fab fa-facebook-f"></i>
                        </a>    
                        <a href="" class="ft-content__social">
                            <i class="ft-content__social-icon fab fa-instagram"></i>
                        </a>    
                        <a href="" class="ft-content__social">
                            <i class="ft-content__social-icon fab fa-twitter"></i>
                        </a>    
                        <a href="" class="ft-content__social">
                            <i class="ft-content__social-icon fab fa-linkedin-in"></i>
                        </a>    
                        <a href="https://github.com/phvohieunghia/TiuShop" class="ft-content__social">
                            <i class="ft-content__social-icon fab fa-github"></i>
                        </a>    
                    </li>    
                </ul>    
            </div>    
        </div>    
        <div class="ft-item ft-about">
            <div class="ft-title">
                About
            </div>    
            <div class="ft-content">
                <ul class="ft-content__list">
                    <li class="ft-content__item">About Us</li>
                    <li class="ft-content__item">Delivery Information</li>
                    <li class="ft-content__item">Privacy Policy</li>
                    <li class="ft-content__item">Terms & Conditions</li>
                    <li class="ft-content__item">Contact Us</li>
                </ul>    
            </div>    
        </div>    
        <div class="ft-item ft-help">
            <div class="ft-title">
                Help
            </div>    
            <div class="ft-content">
                <ul class="ft-content__list">
                    <li class="ft-content__item">Contact Us</li>
                    <li class="ft-content__item">Brands</li>
                    <li class="ft-content__item">Special Discount</li>
                    <li class="ft-content__item">Specials</li>
                    <li class="ft-content__item">Wish List</li>
                </ul>    
            </div>    
        </div>    
        <div class="ft-item ft-policy">
            <div class="ft-title">
                Policy
            </div>    
            <div class="ft-content">
                <ul class="ft-content__list">
                    <li class="ft-content__item">Privacy</li>
                    <li class="ft-content__item">Order History</li>
                    <li class="ft-content__item">Brands</li>
                    <li class="ft-content__item">Site Map</li>
                    <li class="ft-content__item">Newsletter</li>
                </ul>    
            </div>    
        </div>    
    </div>    
    <div class="ft-bottomfooter">
        <div class="ft-vtft__copyright">
            &copy; 2021 - Ecommerce software by TiuShop&trade;
        </div>
        <div class="ft-vtft__content">
            <img class="ft-vtft__item" src="./assets/img/footer_bottom/visa.png" alt="">
            <img class="ft-vtft__item" src="./assets/img/footer_bottom/discover.png" alt="">
            <img class="ft-vtft__item" src="./assets/img/footer_bottom/maestro.png" alt="">
            <img class="ft-vtft__item" src="./assets/img/footer_bottom/paypal.png" alt="">
            <img class="ft-vtft__item" src="./assets/img/footer_bottom/american-express.png" alt="">
        </div>
    </div>
    `
    $_main('.footer').innerHTML = htmls
}