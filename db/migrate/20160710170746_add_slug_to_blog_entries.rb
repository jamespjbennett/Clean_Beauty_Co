class AddSlugToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :slug, :string
    add_index :recipes, :slug, unique: true
  end
end
