json.extract! timezone, :id, :name, :diff
json.users do
  timezone.users.each do |user|
    json.set! user.id do
      json.image_url user.image_url
      json.name user.name
      json.id user.id
    end
  end
end
