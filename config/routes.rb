Rails.application.routes.draw do
  devise_for :users
  root 'pages#home'

  # /api/money
  namespace :api do
    resources :money, only:[:index, :create, :update, :destroy]
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
