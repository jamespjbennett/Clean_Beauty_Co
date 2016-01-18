class AddKeyWordsToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :keywords, :string
  end
end
