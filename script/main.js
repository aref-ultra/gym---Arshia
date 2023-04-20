$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change')
    })
})

$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
        $('.nav-menu').addClass('custom-navbar')
    } else {
        $('.nav-menu').removeClass('custom-navbar')
    }
})


$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 700) {
        $('.award-text').addClass('fromRight')
        $('.award-img').addClass('fromLeft')
    } else {
        $('.award-text').removeClass('fromRight')
        $('.award-img').removeClass('fromLeft')
    }
})


$('.gallery-list-item').click(function () {
    // console.log($(this))
    let value = $(this).attr('data-filter');
    $(this).addClass('active-gallery-list-item').siblings().removeClass('active-gallery-list-item');
    if (value === 'all') {
        $('.filter').show(300)
    } else {
        $('.filter').filter('.' + value).show(300);
        $('.filter').not('.' + value).hide(300);
    }
})



$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 4400) {
        $('.card-1').addClass('animation-mmbership-Right')
        $('.card-2').addClass('animation-mmbership-buttom-Y')
        $('.card-3').addClass('animation-mmbership-Left')
    } else {
        $('.card-1').removeClass('animation-mmbership-Right')
        $('.card-2').removeClass('animation-mmbership-buttom-Y')
        $('.card-3').removeClass('animation-mmbership-Left')
    }
})
