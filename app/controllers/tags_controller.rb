class TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def show
    @prototype = Tag.find(params[:id])
  end

end
