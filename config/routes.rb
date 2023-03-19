Rails.application.routes.draw do
  resources :games
  resources :reviews
  resources :users

  post '/signup', to: 'users#create'
  patch '/update_user', to: 'users#update'
  delete '/destroy_user', to: 'users#destroy'
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete'
  get '/authorized_user', to: 'sessions#show'
  get '/games_list', to: 'games#index'
  get 'recent_reviews', to: 'reviews#latest'
  post 'new_review', to: 'reviews#create'
  get 'my_reviews', to: 'reviews#user_reviews'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
