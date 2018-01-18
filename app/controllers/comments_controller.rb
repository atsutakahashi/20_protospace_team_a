class CommentsController < ApplicationController
  def create
    @comment = Comment.create(text: comment_params[:text], prototype_id: comment_params[:prototype_id], user_id: current_user.id)
    respomd_to do |format|
      format.html { redirect_to "/prototypes/#{@comment.prototype.id}" }
      format.json
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to "/prototypes/#{@comment.prototype.id}"
  end

  private
  def comment_params
    params.permit(:text, :prototype_id)
  end
end
