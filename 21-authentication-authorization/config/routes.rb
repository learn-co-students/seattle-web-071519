Rails.application.routes.draw do
  resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  root 'students#index'

  get '/login', to: "auth#login"
  post '/login', to: "auth#verify"
end
