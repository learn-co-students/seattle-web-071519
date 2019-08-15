class BrewsController < ApplicationController
  before_action :set_params, except: [:strongest, :create, :index, :new]

  def index
    @brews = Brew.all
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      redirect_to brew_path(@brew)
    else
      flash[:message]= @brew.errors.full_messages
      render :new
    end
  end

  def edit
  end

  def update
    @brew.update(brew_params)
    redirect_to brew_path(@brew)
  end


  def show
    set_params
    @customers = @brew.customers
  end

  private
  def set_params
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
  end

  def strongest
    # @brews = Brew.all
  end
end
