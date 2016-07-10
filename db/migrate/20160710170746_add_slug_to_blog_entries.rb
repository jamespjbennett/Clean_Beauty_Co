class AddSlugToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :slug, :string
  end
end
