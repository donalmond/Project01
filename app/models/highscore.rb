# == Schema Information
#
# Table name: highscores
#
#  id         :integer          not null, primary key
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Highscore < ActiveRecord::Base
end
