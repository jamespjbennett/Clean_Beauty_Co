class AddFieldsToBlogCcomments < ActiveRecord::Migration
  def change
    add_column :blog_ccomments, :content, :text
    add_column :blog_ccomments, :user, :string
  end
end
