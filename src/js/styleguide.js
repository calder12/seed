(function($){
  var $body = $('body');
  var $docs = $('#s-docs');
  // Add anchors
  anchors.add('.s-hs-docs h2, .s-hs-docs h3, .s-hs-docs h4');

  // Table of Contents
  $("#toc").toc({
    content: 'body',
    headings: '#s-docs > h2, #s-docs > h3, #s-docs > h4',
  });

  // Scroll spy
  $body.scrollspy({
    target: '#table-of-contents',
    offset: 60,
  });
  $body.on('load', function() {
    $body.scrollspy('refresh');
  });

  // Popovers / Tooltips
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
})(jQuery);
