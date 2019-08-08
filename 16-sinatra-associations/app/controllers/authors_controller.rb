class AuthorsController < ApplicationController
  get '/authors' do
    @authors = Author.all
    erb :'authors/index'
  end

  get '/authors/:id' do
    # byebug
    @author = Author.find(params[:id])
    @book_count = @author.books.count
    erb :'authors/show'
  end
end
