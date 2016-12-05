(function() {
  'use strict';

  if (window.Clipboard) {
    var snippets = document.querySelectorAll('.js-code-snippet');
    var className = 'c-clipboard-copy';

    [].forEach.call(snippets, function(snippet) {
      snippet.firstChild.insertAdjacentHTML('beforebegin', '<span class="c-button '+className+'" data-clipboard-snippet data-placement="bottom">Copy</span>');
    });

    var clipboardSnippets = new Clipboard('[data-clipboard-snippet]', {
      target: function(trigger) {
        return trigger.parentNode.querySelector('pre');
      }
    });

    var el = document.querySelectorAll('.'+className);
    var $el = $(el);

    $el.tooltip();

    clipboardSnippets.on('success', function(e) {
      var $trigger = $(e.trigger);
      e.clearSelection();
      $trigger
        .attr('data-original-title', 'Copied!')
        .tooltip('show');
    });

    $el.on('mouseleave', function() {
      $el
        .attr('data-original-title', '')
        .tooltip('hide');
    });


    $('document').on('mouseenter', function() {
      $el.tooltip('hide');
    });
  }
})(jQuery);
