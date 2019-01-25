@posts.each do |post|
   json.set! post.id do
      json.extract! post, :id, :author_id, :body, :title
      json.username post.user.username
   end
end