module Jekyll
  module Viewsource
    def viewsource(link)
      unless link.include? "http"
        link = 'https://github.com/helpscout/seed/blob/develop/scss/' + link
      end

      template = '<p><i class="icon icon-popup"></i> <a href="' + link + '" target="_blank" class="tx-xs tx-uppercase tx-700">View Source</a></p>'

      template
    end
  end
end

Liquid::Template.register_filter(Jekyll::Viewsource)

