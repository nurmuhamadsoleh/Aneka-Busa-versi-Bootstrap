$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
// Event pada saat d klik
$('.page-scroll').on('click', function(e){
    //ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href);
    //tangkap elemen ybs
    //pada saat href d klik
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan.offset().top);
    //ketika halaman di scroll
    //pindahkan scroll
    // $('body, html').scrollTop(elemenTujuan.offset().top)
    $('body, html').animate({
        scrollTop: elemenTujuan.offset().top - 70
    }, 1000, 'easeInOutCirc', 'easeOutBack')
    // console.log($('body, html').scrollTop());
    e.preventDefault();
});

//about
$(window).on('load', function(){
    $('.pAtas').addClass('muncul');
    $('.pBawah').addClass('muncul');
});

$(window).scroll(function(){
    var Wscroll = $(this).scrollTop();
    //portfolio
    if(Wscroll > $('.new_product').offset().top - 250){
        $('.new_product .thumbnail').each(function(i){
            setTimeout(function(){
                $('.new_product .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i+1), 'easeInOutCirc')
        });
        // console.log('OK');
    }
});
