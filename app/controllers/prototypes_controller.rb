class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :update, :destroy]

  def index
    @prototypes = Prototype.order("created_at DESC").page(params[:page]).per(4)
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      render :new, alert: 'New prototype was unsuccessfully created'
     end
  end

  def show
    @comments = @prototype.comments.includes(:user)
    @like = Like.find_by(prototype_id: @prototype.id)
  end

  def destroy
    @prototype.destroy
  end

  def edit
    @image = @prototype.captured_images
  end

  def update
    if @prototype.update(prototype_params)
      redirect_to prototype_path, notice: 'Update prototype was successfully created'
    else
      render :edit
     end
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:id, :content, :status,]
    )
  end
end
