module ApplicationHelper
  def dispatcher_tag
    controller_name = controller.class.name.underscore
    controller_name.gsub!(/\//, "_")
    controller_name.gsub!(/_controller$/, "")

    div_tag = %(dispatcher="#{controller_name}.#{controller.action_name}")

    div_tag.html_safe
  end
end
