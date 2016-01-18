class AddKeyWordsToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :keywords, :string
  end
end
