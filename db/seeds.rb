# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Timezone.create!({name: "Atlantic", diff: -4})
Timezone.create!({name: "Eastern", diff: -5})
Timezone.create!({name: "Central", diff: -6})
Timezone.create!({name: "Mountain", diff: -7})
Timezone.create!({name: "Pacific", diff: -8})
Timezone.create!({name: "Alaskan", diff: -9})
Timezone.create!({name: "Hawaii-Aleutian", diff: -10})
