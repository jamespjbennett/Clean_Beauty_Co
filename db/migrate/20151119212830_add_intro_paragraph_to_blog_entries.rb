class AddIntroParagraphToBlogEntries < ActiveRecord::Migration
  def change
    add_column :blog_entries, :Introduction_text, :text
  end
end
