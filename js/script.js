$(function () {
  // ハンバーガーメニュー表示・非表示
  $('.js-btn').on('click', function () {
    $('.menu, .fas').toggleClass('open')
  })

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

  //  スムーズスクロール設定
  const scrollSpeed = 500 // スクロール時間（ミリ秒）
  const fixedHeaderOffset = false // 固定ヘッダー用スクロール量調整ON/OFF（true/false）
  const additionalOffset = 0 // スクロール量調整（px）
  // トップへ戻るボタン設定
  const buttonOffset = 200 // トップへ戻る固定ボタンを表示するスクロール量（px）

  // スムーズスクロール
  $('a[href^="#"]').on('click', function () {
    const href = $(this).attr('href')
    const headerHeight = fixedHeaderOffset ? $('header').outerHeight() : 0
    if (href !== '#' || href !== '') {
      const target = href === '#top' && !$('#top').length ? 'html' : href
      const position = $(target).offset().top - headerHeight - additionalOffset
      $('body, html').animate({ scrollTop: position }, scrollSpeed, 'swing')
      return false
    }
  })

  // トップへ戻る固定ボタンの表示・非表示
  const sfBtn = $('.page-top')
  if (sfBtn.length) {
    $(sfBtn).css('display', 'none')
    $(window).on('scroll', function () {
      const sfBtnDisplay = sfBtn.css('display')
      if ($(this).scrollTop() > buttonOffset && sfBtnDisplay === 'none') {
        sfBtn.stop().fadeIn()
      } else if ($(this).scrollTop() <= buttonOffset && sfBtnDisplay !== 'none') {
        sfBtn.stop().fadeOut()
      }
    })
  }

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
