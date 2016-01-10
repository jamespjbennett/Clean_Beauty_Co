class ApplicationController < ActionController::Base
  layout :layout_by_resource
  before_filter :do_common_stuff
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include SimpleCaptcha::ControllerHelpers
  protect_from_forgery with: :exception
  
  def do_common_stuff
    @contact = Contact.new
  end

  protected

  def layout_by_resource
    if devise_controller?
       false
    else
      "application"
    end
  end


end
