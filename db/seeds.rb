puts "seeding"

# User.create(username: "lessconfusing", name: "Alex", password: "Bears#12", bio: "Is the main user and creator of this wonderful application")

# Encabulator.create(name: "The Original Encabulator", description: "The one that started it all! The first encabulation solution ever produced and patented.", price: 1999, image_url: "app/images/turboencabulator-100385639-orig.webp")

# Review.create(user_id: 1, encabulator_id: 1, body: "Super out dated! I have a ton of respect for it, but ultimately useless in todays day and age!")

Encabulator.find(2).update(image_url: "https://lukebertram.github.io/encabulator/img/encab-cutaway.png")

puts "seeded"