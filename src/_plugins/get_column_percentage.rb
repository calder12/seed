module Jekyll
  module Get_column_percentage
    def get_column_percentage(number)
      (number.to_f / 12 * 100.0).round(4)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Get_column_percentage)
