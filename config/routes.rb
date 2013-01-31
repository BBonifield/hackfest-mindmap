HackfestMindmap2::Application.routes.draw do
  match 'new_map' => 'maps#new_map'
  match 'map/:id' => 'maps#show', :as => 'map'

  root :to => 'maps#index'
end
