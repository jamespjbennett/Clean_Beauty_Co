class AddFeaturedToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :featured, :boolean
  end
end
