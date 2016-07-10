class BlogEntry < ActiveRecord::Base
	acts_as_commontator
	acts_as_commontable
	has_many :blog_ccomments
	friendly_id :slug, use: :slugged
	serialize :keywords, Array

end
