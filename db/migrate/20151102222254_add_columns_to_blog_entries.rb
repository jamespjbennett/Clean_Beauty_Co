class AddColumnsToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :date, :date
    add_column :blog_entries, :content, :text
    add_column :blog_entries, :title, :string
  end
end
