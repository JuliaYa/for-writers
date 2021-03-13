Rails.application.routes.draw do
  

  root to: 'application#landing'

  namespace :app do
    devise_for :users

    resource :dashboard, only: [:show], controller: 'dashboard'
  end
end
