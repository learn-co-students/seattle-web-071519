class BooksController < ApplicationController
  before_action :set_params, only: [:show, :edit, :update, :destroy]
  def index
    @books = Book.all
  end
  #
  # def show
  # end

  def new
    @book = Book.new
    @authors = Author.all
  end

  def create
    byebug
    @book = Book.new(book_params)
    if @book.save
      redirect_to book_path(@book)
    else
      @authors = Author.all
      render :new
    end
  end

  # def edit
  # end

  def update
    @book.update(book_params)
    redirect_to @book
  end

  def destroy
    @book.delete
    redirect_to books_path
  end

  private
  def book_params
    params.require(:book).permit(:title, :snippet, :author_id)
  end

  def set_params
    @book = Book.find(params[:id])
  end
end
