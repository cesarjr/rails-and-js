100.times do
  person = Person.create(
    name: Faker::Name.name,
    state: Faker::Address.state,
    country: Faker::Address.country
  )

  puts "Creating #{person.name}"
end
