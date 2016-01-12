class BlogCcomment < ActiveRecord::Base
	belongs_to :blog_entry
end
