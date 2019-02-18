# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
   # validates :body, presence: true
   # validate :post_too_long

   # media validation???
      
   has_one_attached :media


   belongs_to :user,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :User

   has_many :likes, :dependent => :destroy

   has_many :comments, :dependent => :destroy
   
   # def post_too_long
   #    if body.splilength > 140
   #       errors[:body] << "too long"
   #    end
   # end
end
