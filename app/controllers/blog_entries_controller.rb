class BlogEntriesController < ApplicationController
  before_action :set_blog_entry, only: [:show, :edit, :update, :destroy]

  # GET /blog_entries
  # GET /blog_entries.json
  def index
    @blog_entries = BlogEntry.all.sort.reverse
    @blog_entries_first = BlogEntry.all.sort.reverse.first
    @featured_blog_entry = BlogEntry.last
    @all_other_blog_entries = BlogEntry.where.not(id: @featured_blog_entry.id)
    @latest_blog_entries = @blog_entries[0..3]
  end

  # GET /blog_entries/1
  # GET /blog_entries/1.json
  def show
    # uncomment this when the slugs are all in place
    # @blog_entry = BlogEntry.find_by_slug(params[:slug])
    @blog_entry = BlogEntry.find(params[:id])
    @blog_entries = BlogEntry.all.sort.reverse
    @latest_blog_entries = @blog_entries[0..3]
    @blog_comment = BlogCcomment.new
  end

  # GET /blog_entries/new
  def new
    @blog_entry = BlogEntry.new
  end

  # GET /blog_entries/1/edit
  def edit
  end

  # POST /blog_entries
  # POST /blog_entries.json
  def create
    @blog_entry = BlogEntry.new(blog_entry_params)

    respond_to do |format|
      if @blog_entry.save
        format.html { redirect_to @blog_entry, notice: 'Blog entry was successfully created.' }
        format.json { render :show, status: :created, location: @blog_entry }
      else
        format.html { render :new }
        format.json { render json: @blog_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_entries/1
  # PATCH/PUT /blog_entries/1.json
  def update
    respond_to do |format|
      if @blog_entry.update(blog_entry_params)
        format.html { redirect_to @blog_entry, notice: 'Blog entry was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog_entry }
      else
        format.html { render :edit }
        format.json { render json: @blog_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_entries/1
  # DELETE /blog_entries/1.json
  def destroy
    @blog_entry.destroy
    respond_to do |format|
      format.html { redirect_to blog_entries_url, notice: 'Blog entry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_entry
      # uncomment this when the slugs are all in place
      # @blog_entry = BlogEntry.find_by_slug(params[:slug])
      @blog_entry = BlogEntry.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_entry_params
      params[:blog_entry]
    end
end
