$(function () {
  // スライドショー
  $(document).ready(function () {
    $('.slider').bxSlider({
      auto: true,
      mode: 'fade',
      speed: 1000,
      pause: 4000,
      pager: false,
      controls: false,
    })
  })

  // 画像フェードイン
  $(window).scroll(function () {
    $('.scroll-fade').each(function () {
      var targetElement = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity', '1')
        $(this).css('transform', 'translateY(0)')
      }
    })
  })
})
