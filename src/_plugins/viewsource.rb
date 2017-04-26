module Jekyll
  module Viewsource
    def viewsource(link)
      unless link.include? "http"
        link = 'https://github.com/helpscout/seed/blob/develop/scss/' + link
      end

      template = '<p class="u-mrg-0"><a href="' + link + '" target="_blank" class="c-link--view-source tx-sm">View Source</a></p>'

      template
    end
  end
end

Liquid::Template.register_filter(Jekyll::Viewsource)

