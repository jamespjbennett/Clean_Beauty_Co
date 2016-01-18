class Recipe < ActiveRecord::Base
	extend FriendlyId
	friendly_id :title, use: :slugged

	enum category: [ :diy_beauty, :skin_food]
	serialize :ingredients, Array
	serialize :keywords, Array
	serialize :how_to, Array


	
end
