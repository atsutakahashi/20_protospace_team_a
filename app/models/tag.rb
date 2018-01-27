class Tag < ActiveRecord::Base
  has_many :protypes, through: :prototype_tags
  has_many :prototype_tags, dependent: :destroy
  validates :tags_name,presence:true
end
