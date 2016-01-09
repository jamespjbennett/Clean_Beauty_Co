class HomesController < ApplicationController

  def index
  end

  def events
  	@events = Event.all
  end

end
