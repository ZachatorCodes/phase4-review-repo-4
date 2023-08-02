puts "seeding"
require 'faker'


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