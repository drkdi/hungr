Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :update, :show, :index]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]

    get "/user_posts/:id", to: "posts#user_posts", as: :user_posts
    # resources :posts do 
    #   resources :comments
    #   resources :likes, only: [:create]
    #     delete '/likes', to: 'likes#destroy'
    # end 
  end
  root "static_pages#root"
end
