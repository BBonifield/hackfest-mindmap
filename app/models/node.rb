class Node < ActiveRecord::Base
  belongs_to :map
  belongs_to :node
  has_many :nodes
end
