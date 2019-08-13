Rails.application.routes.draw do
  resources :books
  resources :authors
  # get '/books', to: "books#index"
  # get '/books/new', to: "books#new"
  # post '/books', to: "books#create"
  # get '/books/:id', to: "books#show",as: "book"
  # get '/books/:id/edit', to: "books#edit"
  # patch '/books/:id', to: "books#update"
  # delete '/books/:id', to: "books#destroy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
