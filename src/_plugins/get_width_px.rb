module Jekyll
  module Get_width_px
    def get_width_px(number)
      (number.to_f / 24 * 1140).ceil
    end
  end
end

Liquid::Template.register_filter(Jekyll::Get_width_px)
