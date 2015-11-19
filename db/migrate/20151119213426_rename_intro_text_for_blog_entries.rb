class RenameIntroTextForBlogEntries < ActiveRecord::Migration
  def change
    rename_column :blog_entries, :Introduction_text, :introduction_text
  end
end
