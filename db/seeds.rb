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

Comment.destroy_all
Like.destroy_all
Post.destroy_all
User.destroy_all

user1 = User.create!({
   id: 1,
   username: "thesecheesefriesarebombdotcom",
   password: "password",
   profile_pic_url: "https://pixel.nymag.com/imgs/daily/grub/2011/10/13/13_guyfieri.w710.h473.2x.jpg",
   # authoredComments: [4,7],
   # likedPostIds: [4,7],
})
user2 = User.create!({
   id: 2,
   username: "gordon",
   password: "password",
   profile_pic_url: "https://www.hellomagazine.com/imagenes/cuisine/2018080660901/gordon-ramsay-mourns-death-joel-robuchon/0-248-854/gordon-ramsay-mourns-death-t.jpg",
   # authoredComments: [4,7],
   # likedPostIds: [4,7],
})

user3 = User.create!({
   id: 3,
   username: "bulbasaur",
   password: "password",
   profile_pic_url: "https://media1.giphy.com/media/n7ELTApS5zg4g/giphy.webp?cid=3640f6095c53c6d15157383941c23c95",
})
user4 = User.create!({
   id: 4,
   username: "naruto",
   password: "password",
   profile_pic_url: "https://media0.giphy.com/media/vh4GM3DcAC9cA/200w.webp?cid=3640f6095c53c7bf387163783682de52",
})
user5 = User.create!({
   id: 5,
   username: "kramer",
   password: "password",
   profile_pic_url: "data:image/jpeg;base64,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",
})
user5 = User.create!({
   id: 6,
   username: "thesepretzelsaremakingmethirsty",
   password: "password",
   profile_pic_url: "data:image/jpeg;base64,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",
})







#guy fieri's posts
# p1 = Post.create!({
#    id: 1,
#    #body: 'image_url'
#    body: "to Flavortown",
#    title: "Welcome",
#    author_id: 1,
#    # likerIds:[2,3],
#    #commentIds:[2,3]
# })

# p2 = Post.create!({
#    id: 2,
#    #body: 'image_url'
#    body: "are bomb",
#    title: "these cheese fries",
#    author_id: 1,
#    # media: "https://media0.giphy.com/media/m0MfjLtKOgTPG/200.webp?cid=3640f6095c50c994684a644a2eab1ae8",
#    # likerIds:[2,3],
#    #commentIds:[2,3]
# })

# p3 = Post.create!({
#    id: 3,
#    #body: 'image_url'
#    body: "u wot m8",
#    title: "fish and chips",
#    author_id: 2,
#    # likerIds:[2,3],
#    #commentIds:[2,3]
# })

# p4 = Post.create!({
#    id: 4,
#    #body: 'image_url'
#    body: "are making me thirsty",
#    title: "these pretzels",
#    author_id: 4,
#    # likerIds:[2,3],
#    #commentIds:[2,3]
# })

# p5 = Post.create!({
#    id: 5,
#    #body: 'image_url'
#    body: "is bad at smash",
#    title: "Greg",
#    author_id: 3,
#    # likerIds:[2,3],
#    #commentIds:[2,3]
# })



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