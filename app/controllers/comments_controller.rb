class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :set_prototype

  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html { redirect_to "/prototypes/#{@comment.prototype.id}" }
      format.json
    end
  end

  def edit
  end

  def update
    if @comment.update(comment_params)
      redirect_to prototype_path(@prototype), notice: 'Update comment was successfully created'
    else
      render :edit
    end
  end

  def destroy
    @comment.destroy
    redirect_to "/prototypes/#{@comment.prototype.id}"
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_prototype
    @prototype = Prototype.find(params[:prototype_id])
  end

end
