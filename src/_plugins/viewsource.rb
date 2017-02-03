module Jekyll
  module Viewsource
    def viewsource(link)
      unless link.include? "http"
        link = 'https://github.com/helpscout/seed/blob/develop/scss/' + link
      end

      template = '<p><a href="' + link + '" target="_blank" class="c-link--view-source tx-sm tx-500">View Source<i class="icon icon-new-window u-mrg-l-1"></i></a></p>'

      template
    end
  end
end

Liquid::Template.register_filter(Jekyll::Viewsource)

