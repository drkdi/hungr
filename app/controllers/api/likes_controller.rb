class Api::LikesController < ApplicationController


   def create
      like = Like.new
      like.user_id = current_user.user_id
      @post = Post.find(params[:post_id])
      like.post_id = @post.id
      if like.save
         render 'api/posts/show'
      else
         render json: ['cannot like this'], status 422
      end
   end


   def destroy
      like = Like.where(user_id: current_user.id).find(params[:id])
      if like
         like.destroy!
         @post = Post.find(like.post_id)
         render 'api/posts/show'
      else
         render json: ['cannot unlike'], status: 422
      end
   end

   end