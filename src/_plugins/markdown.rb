require 'unindent'
require_relative './template.rb'
# markdown.rb

module Jekyll
  module Tags
    class MarkdownBlock < TemplateBlock
      def initialize(tag_name, markup, tokens)
        super
        @template_name = 'markdown.html'
        @sanitize = true
      end

      def parse_content(context, content)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        content = converter.convert(content.to_s.unindent)
        content
      end
    end
  end
end

Liquid::Template.register_tag('markdown', Jekyll::Tags::MarkdownBlock)
