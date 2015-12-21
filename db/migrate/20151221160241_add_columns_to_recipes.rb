class AddColumnsToRecipes < ActiveRecord::Migration
  def change
  	add_column :recipes, :title, :string
  	add_column :recipes, :ingredients, :string
  	add_column :recipes, :how_to, :string
  	add_column :recipes, :shelf_life, :string
  	add_column :recipes, :helpful_hint, :string
  end
end
