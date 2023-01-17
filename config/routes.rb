Rails.application.routes.draw do
  resources :games
  resources :reviews
  resources :users

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete'
  get '/authorized_user', to: 'users#show'
  get '/games_list', to: 'games#index'
  get 'recent_reviews', to: 'reviews#latest'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
