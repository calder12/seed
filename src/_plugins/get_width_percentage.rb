module Jekyll
  module Get_width_percentage
    def get_width_percentage(number)
      (number.to_f / 24 * 100.0).round(4)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Get_width_percentage)
