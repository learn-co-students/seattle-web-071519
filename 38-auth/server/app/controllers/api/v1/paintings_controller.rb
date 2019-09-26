class Api::V1::PaintingsController < ApplicationController

  def index
    if !logged_in?
      render json: {error: "You must be logged in to see these paintings."}
      return
    end

    @paintings = Painting.all
    render json: @paintings
  end

  def show
    @painting = Painting.find_by(slug: params[:slug])
    render json: @painting
  end

  def create

  end

  def update

  end


end
