class AddBlogentryIdToBlogCcomments < ActiveRecord::Migration
  def change
    add_column :blog_ccomments, :blog_entry_id, :integer
  end
end
