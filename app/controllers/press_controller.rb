class PressController < ApplicationController

	def press
		@press_entries = PressEntry.all
	end

end