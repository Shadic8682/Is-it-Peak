User.destroy_all
Review.destroy_all
Game.destroy_all

puts "Adding Users to the database..."

u1 = User.create(name: "JaQuan Banks", 
email: "shadic151@gmail.com", 
password: "password", 
username: "Shadic8682",
about: "Your typical gamer with strong, but swayable, opinions.",
profile_image: "https://pbs.twimg.com/media/FM7XEZSVIAIP0kX.jpg:large")

puts "Adding games to the database..."

g1 = Game.create(name: "Sonic Frontiers", 
image_url: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1716/tH6pqQHf0hXREt1vVX3ah5P5.png", 
description: "Sonic Frontiers is a 2022 platform game developed by Sonic Team and published by Sega. As Sonic, the player explores the Starfall Islands to collect the Chaos Emeralds, after Sonic and his friends are separated when falling through a wormhole.")

g2 = Game.create(name: "Halo Infinite", description: "Halo Infinite is a 2021 first-person shooter game developed by 343 Industries and published by Xbox Game Studios. 
It is the sixth mainline entry in the Halo series, following Halo 5: Guardians (2015). 
The campaign follows the human supersoldier Master Chief and his fight against the enemy Banished on the Forerunner ringworld Zeta Halo, also known as Installation 07.",
image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Halo_Infinite.png/220px-Halo_Infinite.png")

puts "Adding reviews to the database..."

r1 = Review.create(critique: "Honestly the best feeling Sonic game I've played to date. While the hard mode final boss fell sort of flat, the rest of the game was more than enough to earn a perfect score from me.",
review_score: 10, 
user_id: u1.id, 
game_id: g1.id)

puts "Done seeding!"