class Node < ActiveRecord::Base
  attr_accessible :map_id, :node_id, :text

  belongs_to :map
  belongs_to :node
  has_many :nodes, :dependent => :destroy
end
