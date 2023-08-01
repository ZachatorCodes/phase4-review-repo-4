puts "seeding"
require 'faker'
# User.create(username: "lessconfusing", name: "Alex", password: "Bears#12", bio: "Is the main user and creator of this wonderful application")

# Encabulator.create(name: "The Original Encabulator", description: "The one that started it all! The first encabulation solution ever produced and patented.", price: 1999, image_url: "app/images/turboencabulator-100385639-orig.webp")

# Review.create(user_id: 1, encabulator_id: 1, body: "Super out dated! I have a ton of respect for it, but ultimately useless in todays day and age!")


10.times do 

    User.create(username: Faker::Name.name.split(" ")[0], name: Faker::Name.name, password: "1234", bio: Faker::Quote.jack_handey )
end 

20.times do 

    Encabulator.create(name: Faker::Commerce.product_name, description: Faker::Lorem.sentence, price: rand(200..4000), image_url: "app/images/turboencabulator-100385639-orig.webp")

end

50.times do
Review.create(user_id: rand(1...10), encabulator_id: rand(1..20), body: Faker::Lorem.sentence)
end

puts "seeded"