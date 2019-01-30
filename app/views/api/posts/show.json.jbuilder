json.set! @post.id do
      json.extract! @post, :id, :author_id, :body, :title
      json.username @post.user.username
      json.media url_for(@post.media) if @post.media.attached?
end