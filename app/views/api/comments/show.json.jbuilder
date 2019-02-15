json.set! @comment.id do
      json.extract! @comment, :id, :author_id, :body, :post_id
      # json.username @comment.user.username
end 