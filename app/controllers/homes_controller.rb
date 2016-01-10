class HomesController < ApplicationController

  def index
  	@featured_products = []
  	@featured_products << BlogEntry.where(featured:true) << Recipe.where(featured:true)
  	@featured_products = @featured_products.flatten
    @contact = Contact.new
  end

  def events
  	@events = Event.all
  end

  def shop
  	redirect_to "http://clean-beauty-co.myshopify.com/"
  end

end
