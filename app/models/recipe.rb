class Recipe < ActiveRecord::Base
	enum category: [ :diy_beauty, :skin_food]
	serialize :ingredients, Array
	serialize :how_to, Array
end
