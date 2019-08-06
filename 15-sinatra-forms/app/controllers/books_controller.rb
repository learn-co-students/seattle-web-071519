class BooksController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  #root
  get '/' do
    "Hello World"
  end

  #index
  get '/books' do
    @books = Book.all
    erb :'index'
  end

  get '/books/new' do
    erb :new
  end

  #show
  get '/books/:id' do
    # byebug
    @book = Book.find_by(id: params[:id])
    erb :'show'
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
  end

  post '/books' do
    # byebug
    @book = Book.new(title: params[:title], author: params[:author], snippet: params[:snippet])
    @book.save
    redirect "/books/#{@book.id}"
  end

  patch '/books/:id' do
    byebug
    @book = Book.find(params[:id])
    @book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    # byebug
    @book = Book.find(params[:id])
    @book.delete
    redirect '/books'
  end

end
