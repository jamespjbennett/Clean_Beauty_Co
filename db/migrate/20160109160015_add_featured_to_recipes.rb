class AddFeaturedToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :featured, :boolean
  end
end
