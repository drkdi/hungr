class Api::LikesController < ApplicationController


   def create

      like = Like.new
      like.author_id = current_user.id
      @post = Post.find(params[:post_id])
      like.post_id = @post.id
      
      if like.save!
         render 'api/posts/show'
      else
            render json: ['cannot like this'], status: 422

      end
   end


   def destroy
      
      # want to find post_id, author_id, or like_id
      # debugger
      like = Like.where(author_id: current_user.id).find(params[:id])
      if like
         like.destroy!
         @post = Post.find(like.post_id)
         render 'api/posts/show'
      else
         render json: ['cannot unlike'], status: 422
      end
   end

   end