@comments.each do |comment|
   json.set! comment.id do
      json.extract! comment, :id, :author_id, :post_id, :body
      # json.username post.user.username
   end
end
