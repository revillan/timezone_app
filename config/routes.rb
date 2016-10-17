Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :timezones, only: [:index]
  end
end
