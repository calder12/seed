(function($){
  $( function() {
    initEvents();
  });
  function initEvents() {
    var $window = $(window);
    var $navBody = $('#js-hs-nav-body');

    var $navLink = $('.nav__link');

    $navLink.on('click', function(e) {
      var $this = $(this);
      var $parent = $this.parent();
      var $subNav = $parent.find('.nav-secondary');
      var section = $this.data('section');

      if($subNav.length) {
        e.preventDefault();
        $subNav.slideToggle(300, 'swing');
      }
    });


    $('#js-hs-nav-toggle').on('click', function(e) {
      e.preventDefault();
      $navBody.slideToggle(300, 'swing');
      $navBody.toggleClass('collapsed');
    });

    $window.on('resize', function() {
      if(window.innerWidth >= 768) {
        if(!$navBody.height()) {
          $navBody.removeClass('collasped');
          $navBody.show();
        }
      } else {
        if($navBody.height()) {
          $navBody.addClass('collasped');
          $navBody.hide();
        }
      }
    });
  }

  // Copy color to clipboard
  if(window.Clipboard) {
    var clipboard = new Clipboard('.c-color-swatch__item', {
      text: function(trigger) {
        return trigger.getAttribute('data-clipboard-value');
      }
    });

    clipboard.on('success', function(e) {
      var $overlay = $('#c-overlay');
      var $target = $(e.trigger);
      var $content = $overlay.find('.c-overlay__content');
      var $background = $overlay.find('.c-overlay__background');
      var style = $target.attr('style');
      var text = e.text;

      if($target.hasClass('c-color-swatch__item--dark')) {
        $overlay.addClass('c-overlay--dark');
      } else {
        $overlay.removeClass('c-overlay--dark');
      }

      $content.html('Copied ' + text + '!');
      $background.attr('style', style);

      $overlay.fadeIn(80).delay(500).fadeOut(200);
    });
  }

  // Add anchors
  anchors.add('.s-hs-docs h2, .s-hs-docs h3, .s-hs-docs h4');

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

})(jQuery);
