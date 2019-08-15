class PurchasesController < ApplicationController
  def new
    @purchase = Purchase.new
    #@brews used in the collection_select for Purchase
    @brews = Brew.all
  end

  def show
    @purchase = Purchase.find(params[:id])
  end

  def create
    @purchase = Purchase.new(purchase_params)
    @purchase.save
    redirect_to @purchase
  end

  def index
    @purchases = Purchase.all
  end

  private
  def purchase_params
    params.require(:purchase).permit(:customer_name, :price, :brew_id)
  end
end
