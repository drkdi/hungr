Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :update, :show, :index]

    # resources :posts do 
    #   resources :comments
    #   resources :likes, only: [:create]
    #     delete '/likes', to: 'likes#destroy'
    # end 
  end
  root "static_pages#root"
end
