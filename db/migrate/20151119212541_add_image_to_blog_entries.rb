class AddImageToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :image, :string
  end
end
