class Like < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :post
end