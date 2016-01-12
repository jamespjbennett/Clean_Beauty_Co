class BlogEntry < ActiveRecord::Base
	acts_as_commontator
	acts_as_commontable
	has_many :blog_ccomments
end
