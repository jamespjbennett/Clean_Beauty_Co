class BlogEntry < ActiveRecord::Base
	extend FriendlyId
	friendly_id :slug, use: :slugged
	acts_as_commontator
	acts_as_commontable
	has_many :blog_ccomments
	serialize :keywords, Array

end
