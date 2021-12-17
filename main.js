var listSlide = ['./assets/img/slider/test1.jpg', './assets/img/slider/test2.jpg'];

function getSlider() {
    var html = getSlierString()
    var sliderContent = document.querySelector('.sd-content')
    sliderContent.innerHTML = html
    var titleSlider = document.querySelector('.sd-title')
    titleSlider.style.animation = 'changeSliderTitle 0.7s ease-in-out'
    titleSlider.style.opacity = '1'
}

function changeSlider() {
    var mainSlider = document.querySelector('.sd-content')
    setInterval(function() {
        mainSlider.style.animation = 'changeSlider 1.2s ease-in-out'
        var item = listSlide.shift()
        listSlide.push(item)
        var html = getSlierString()
        var sliderContent = document.querySelector('.sd-content')
        setTimeout(function() {
            sliderContent.innerHTML = html
            mainSlider.style.animation = ''
            var titleSlider = document.querySelector('.sd-title')
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
getSlider()
changeSlider()