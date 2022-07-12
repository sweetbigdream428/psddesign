  // Facebook hover
  $('.facebook-hover').hover(function (e) {
    e.preventDefault();
    $('.facebook-hover-page').css('display', 'flex');
});
$('.facebook-hover').on('mouseleave', function (e) {
    e.preventDefault();
    $('.facebook-hover-page').css('display', 'none');
});

// Twitter hover
$('.twitter-hover').hover(function (e) {
    e.preventDefault();
    $('.twitter-hover-page').css('display', 'flex');
});
$('.twitter-hover').on('mouseleave', function (e) {
    e.preventDefault();
    $('.twitter-hover-page').css('display', 'none');
});

// Insta hover
$('.insta-hover').hover(function (e) {
    e.preventDefault();
    $('.insta-hover-page').css('display', 'flex');
});
$('.insta-hover').on('mouseleave', function (e) {
    e.preventDefault();
    $('.insta-hover-page').css('display', 'none');
});

// youtubu hover
$('.youtubu-hover').hover(function (e) {
    e.preventDefault();
    $('.youtubu-hover-page').css('display', 'flex');
});
$('.youtubu-hover').on('mouseleave', function (e) {
    e.preventDefault();
    $('.youtubu-hover-page').css('display', 'none');
});
$('.keyword-name').on('click', function(e){
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
    else {
        $(this).addClass('active');
    }
});
$('.view-review').on('click', function(e){
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.review-modal').css('display', 'none');
    }
    else {
        $(this).addClass('active');
        $('.review-modal').css('display', 'block');
    }
})
$('.close-modal').on('click', function(e){
    $('.view-review').removeClass('active');
    $('.review-modal').css('display', 'none');
});