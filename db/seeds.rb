# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




#guy fieri userid 1 owns posts 1,2,3, likes post 4,7
#gordon ramsay userid 2 owns posts 4,5,6 likes post 1,7
#rene redzepi userid 3 owns posts 7,8,9 likes post 1,4


User.destroy_all
Post.destroy_all

user1 = User.create!({
   id: 1,
   username: "guyf13r1@flavor.com",
   password: "password"
   # authoredComments: [4,7],
   # likedPostIds: [4,7],
})



#guy fieri's posts
p1 = Post.create!({
   id: 1,
   #body: 'image_url'
   body: "Welcome to Flavortown",
   title: "Title1",
   author_id: 1,
   # likerIds:[2,3],
   #commentIds:[2,3]
})

p1 = Post.create!({
   id: 1,
   #body: 'image_url'
   body: "Welcome to Flavortown",
   title: "Title1",
   author_id: 1,
   media: "https://media0.giphy.com/media/m0MfjLtKOgTPG/200.webp?cid=3640f6095c50c994684a644a2eab1ae8",
   # likerIds:[2,3],
   #commentIds:[2,3]
})



# p2 = Post.create!(
#    id: 2,
#    #body: 'image_url'
#    title: "Title2",
#    body: "these cheese fries are bomb",
#    author_id: 1,
#    # likerIds:[],
#    #commentIds:[]
# )
# p3 = Post.create!(
#    id: 3,
#    #body: 'image_url'
#    title: "Title3",
#    body: "these pretzels are making me thirsty",
#    author_id: 1,
#    # likerIds:[],
#    #commentIds:[]
# )

















# #gordon ramsay's posts
# Post.create!(
#    id: 4,
#    #body: 'image_url'
#    text: "u wot m8",
#    authorId: 2,
#    likerIds:[1,3],
#    #commentIds:[2,3]
# )
# Post.create!(
#    id: 5,
#    #body: 'image_url'
#    text: "american cheese is the best cheese",
#    authorId: 2,
#    likerIds:[],
#    #commentIds:[]
# )
# Post.create!(
#    id: 6,
#    #body: 'image_url'
#    text: "what kind of sandwich are you???",
#    authorId: 2,
#    likerIds:[],
#    #commentIds:[]
# )

# #rene redzepi's posts
# Post.create!(
#    id: 7,
#    #body: 'image_url'
#    text: "I like nature and stuff",
#    authorId: 2,
#    likerIds:[1,2],
#    #commentIds:[2,3]
# )
# Post.create!(
#    id: 8,
#    #body: 'image_url'
#    text: "michelin stars what r those",
#    authorId: 2,
#    likerIds:[],
#    #commentIds:[]
# )
# Post.create!(
#    id: 9,
#    #body: 'image_url'
#    text: "noma new york when",
#    authorId: 2,
#    likerIds:[],
#    #commentIds:[]
# )


# #users 
# User.create!(
#    id: 1,
#    username: "Guy F13R1",
#    icon: 'image_url',
#    authoredPostIds: [1,2,3],
#    authoredComments: [4,7],
#    likedPostIds: [4,7],
# )

# User.create!(
#    id: 2,
#    username: "theGordon",
#    icon: 'image_url',
#    authoredPostIds: [4,5,6],
#    authoredComments: [1,7],
#    likedPostIds: [1,7],
# )

# User.create!(
#    id: 3,
#    username: "rene",
#    icon: 'image_url',
#    authoredPostIds: [7,8,9],
#    authoredComments: [1,4],
#    likedPostIds: [1,4],
# )