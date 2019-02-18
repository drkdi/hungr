class Api::CommentsController < ApplicationController
   def index
      @comments = Comment.all
   end

   def show
      @comment = Comment.find_by(id: params[:id])
   end

   def create
      
      @comment = Comment.new(comment_params)
      # @comment.author_id = current_user.id
      if @comment.save
         render 'api/comments/show'
      else
         render json: @comment.errors.full_messages, status: 400
      end
   end

   def destroy
      @comment = Comment.where(author_id: current_user.id).find(params[:id])
      if @comment
         @comment.destroy!
         render json: {}
      else
         render json: ['not your comment'], status: 422
      end
   end
      
   def comment_params
      params.require(:comment).permit(:body, :post_id, :author_id)
   end

end