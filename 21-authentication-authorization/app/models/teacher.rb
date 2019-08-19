class Teacher < ApplicationRecord
  has_secure_password
  # def password=(password)
  #   @password = Digest::SHA256.base64digest(password)
  # end
  #
  # def authenticate(password)
  #   @password = Digest::SHA256.base64digest(password)
  # end
end
