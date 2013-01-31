class Map < ActiveRecord::Base
  attr_accessible :name

  has_many :nodes

  def root
    nodes.where(:node_id => nil).first
  end
end
