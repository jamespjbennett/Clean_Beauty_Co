Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  mount Commontator::Engine => '/commontator'

  resources :ingredients
  # resources :blog_entries
  # uncomment the below when the slugs are in place
  resources :blog_entries, :except => ['show']
  get    'blog_entries/:slug' => 'blog_entries#show', :as => 'blog_entries_show'

  resources :stockists
  resources :recipes, :except => ['show']
  # get  'recipes/:slug' => 'recipes#show'
  get    'recipes/:slug' => 'recipes#show', :as => 'recipes_show'
  resources :products
  resources :homes
  resources :abouts
  resources :blog_ccomments
  match '/press', to: 'press#press', via: 'get'
  match '/events', to: 'homes#events', via: 'get'
  root 'homes#index'
  match '/contacts',     to: 'contacts#new',  via: 'get'
  match '/diy_beauty',     to: 'recipes#diy_beauty',  via: 'get'
  match '/skin_food',     to: 'recipes#skin_food',  via: 'get'
  match '/shop',     to: 'homes#shop',  via: 'get'
  resources "contacts", only: [:new, :create]

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
