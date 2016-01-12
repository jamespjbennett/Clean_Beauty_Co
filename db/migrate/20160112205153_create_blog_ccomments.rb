class CreateBlogCcomments < ActiveRecord::Migration
  def change
    create_table :blog_ccomments do |t|

      t.timestamps null: false
    end
  end
end
