FactoryGirl.define do
  factory :user do
    name               { Faker::Name.name }
    avatar        { fixture_file_upload("") }
    position             { Faker::Lorem.sentence }
    profile            { Faker::Lorem.sentence }
    occupation              { Faker::Job.title }
    email              { Faker::Internet.email }
    password           { Faker::Internet.password(8)}
    password_confirmation { password }
  end
end