FactoryGirl.define do
  factory :prototype do
    title              { Faker::Cat.name }
    catch_copy         { Faker::Lorem.sentence }
    content               { Faker::Lorem.sentence }
    likes_count        0
    user

  end
end
