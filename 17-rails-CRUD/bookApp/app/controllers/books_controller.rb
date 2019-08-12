class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(snippet: params[:book][:snippet],
                    title: params[:book][:title],
                    author: params[:book][:author])
    @book.save
    redirect_to book_path(@book.id)
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    @book.update(snippet: params[:book][:snippet],
                    title: params[:book][:title],
                    author: params[:book][:author])
    redirect_to book_path(@book.id)
  end

  def destroy
    @book = Book.find(params[:id])
    @book.delete
    redirect_to books_path
  end
end
