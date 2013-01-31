class MapsController < ApplicationController

  def index
    @maps = Map.scoped
  end

  def new_map
    map = Map.create
    if map = Map.create
      redirect_to  "/map/#{map.id}"
    else
      render :status => 400
    end
  end

  def show
    @map = Map.find params[:id]
    respond_to do |format|
      format.html
      format.json do
        result = {
          :name => @map.name,
          :root => parse_node(@map.root)
        }
        render :json => result.to_json
      end
    end
  end


  private


  def parse_node node
    { :id => node.id,
      :text => node.text,
      :children => node.nodes.map { |child| parse_node(child) }
    }
  end

end
