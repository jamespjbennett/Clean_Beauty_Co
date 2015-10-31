class StockistsController < ApplicationController
  before_action :set_stockist, only: [:show, :edit, :update, :destroy]

  # GET /stockists
  # GET /stockists.json
  def index
    @stockists = Stockist.all
  end

  # GET /stockists/1
  # GET /stockists/1.json
  def show
  end

  # GET /stockists/new
  def new
    @stockist = Stockist.new
  end

  # GET /stockists/1/edit
  def edit
  end

  # POST /stockists
  # POST /stockists.json
  def create
    @stockist = Stockist.new(stockist_params)

    respond_to do |format|
      if @stockist.save
        format.html { redirect_to @stockist, notice: 'Stockist was successfully created.' }
        format.json { render :show, status: :created, location: @stockist }
      else
        format.html { render :new }
        format.json { render json: @stockist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stockists/1
  # PATCH/PUT /stockists/1.json
  def update
    respond_to do |format|
      if @stockist.update(stockist_params)
        format.html { redirect_to @stockist, notice: 'Stockist was successfully updated.' }
        format.json { render :show, status: :ok, location: @stockist }
      else
        format.html { render :edit }
        format.json { render json: @stockist.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stockists/1
  # DELETE /stockists/1.json
  def destroy
    @stockist.destroy
    respond_to do |format|
      format.html { redirect_to stockists_url, notice: 'Stockist was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stockist
      @stockist = Stockist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stockist_params
      params[:stockist]
    end
end
