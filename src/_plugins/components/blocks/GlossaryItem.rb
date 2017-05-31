require "jekyll-components"

module Jekyll
  class GlossaryItemComponent < ComponentBlock
    def template(context)
      # Declare props as variables here
      title = @props["title"]
      content = @props["content"]

      # Output rendered markup
      render = %Q[
        <div class="component">
          #{content}
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "GlossaryItem",
  Jekyll::GlossaryItemComponent,
)
