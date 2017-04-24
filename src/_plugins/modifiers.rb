require "jekyll-template"

module Jekyll
  module Tags
    class ModifiersBlock < TemplateBlock
      def initialize(tag_name, markup, tokens)
        super
        @template_name = "modifiers.html"
      end
    end
  end
end

Liquid::Template.register_tag("modifiers", Jekyll::Tags::ModifiersBlock)
