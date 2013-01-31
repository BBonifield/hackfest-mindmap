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
  end
end
