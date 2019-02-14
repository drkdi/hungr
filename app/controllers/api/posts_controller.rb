class Api::PostsController < ApplicationController


   def index
      # come back and filter when you have friends :(
      @posts = Post.all
   end

   def show 
      @post = Post.find_by(id: params[:id])
      # debugger
   end

   def user_posts
      @posts = Post.all.where(author_id: current_user.id)
   end 

   

   def create
      @post = Post.new(post_params)
      @post.author_id = current_user.id
      if @post.save
         #change to show later
         render 'api/posts/show'
      else
         render json: @post.errors.full_messages, status: 400
      end
   end

   def destroy
      @post = Post.where(author_id: current_user.id).find(params[:id])
      if @post
         @post.destroy!
       #change to show later
            render json: {}
            # render 'api/posts/index'
      else
         render json: ['not your post'], status: 422
      end
   end 

   def update
      @post = Post.find(params[:id]).where(author_id: current_user.id)
      if @post && @post.update(post_params)
         render 'api/posts/show'
      else
         render json: ['cannot edit post'], status: 422
      end
   end

   def post_params
      params.require(:post).permit(:body, :title, :author_id, :media, :likes)
   end

end