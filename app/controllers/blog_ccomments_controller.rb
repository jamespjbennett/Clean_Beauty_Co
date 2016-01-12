class BlogCcommentsController < ApplicationController

	def create
		BlogCcomment.create(blog_entry_id: params[:signup][:pass_confirm].to_i, content: params[:blog_ccomment][:content], user: params[:blog_ccomment][:user])
		redirect_to blog_entry_path(params[:signup][:pass_confirm].to_i)
	end
end