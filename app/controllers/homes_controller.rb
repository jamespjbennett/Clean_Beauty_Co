class HomesController < ApplicationController

  def index
  end

  def events
  	@events = Event.all
  end

  def shop
  	redirect_to "http://clean-beauty-co.myshopify.com/"
  end

end
