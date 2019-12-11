Rails.application.routes.draw do
  devise_for :users
  root 'pages#home'

  # /api/money
  namespace :api do
    resources :money, only:[:index, :create, :update, :destroy]
  end
end
