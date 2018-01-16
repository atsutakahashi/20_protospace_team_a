class Like < ActiveRecord::Base
  belongs_to :prototype, counter_cache: :like_counts
  belongs_to :user
end
