class Client < ActiveRecord::Base
  attr_accessible :map_id, :session_id
  has_many :nodes
end
