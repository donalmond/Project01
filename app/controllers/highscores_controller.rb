class HighscoresController < ApplicationController
  def new
    @highscore = Highscore.new
  end

  def create
  # @highscore = Highscore.new(highscore_params)
  @highscore = Highscore.find_by :user_id => params[:highscore][:user_id]
  if @highscore.nil?
    @highscore = Highscore.new(highscore_params)
  else
    @highscore.update( highscore_params ) if @highscore.score < params[:highscore][:score].to_i
  end

  respond_to do |format|
    if @highscore.save
      format.html { redirect_to @highscore, notice: 'Highscore was successfully created.' }
      format.json { render json: { status: "OK", score: @highscore.score } }
    else
      format.html { render :new }
      format.json { render json: @highscore.errors, status: :unprocessable_entity }
    end
   end
  end

  def show
  end

  def index
  # @allhighscores = Highscore.all

 # @allhighscores = Highscore.order(score: :desc).limit(5)

  end

  private
  def highscore_params
    params.require(:highscore).permit(:score, :user_id)
  end

end
