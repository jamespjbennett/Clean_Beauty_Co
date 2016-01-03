class AddAvailableToRecipe < ActiveRecord::Migration
  def change
  	add_column :recipes, :available, :boolean
  end
end
