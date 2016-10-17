@timezones.each do |timezone|
  json.set! timezone.id do
    json.partial! 'timezone', timezone: timezone
  end
end
