json.array!(@stockists) do |stockist|
  json.extract! stockist, :id
  json.url stockist_url(stockist, format: :json)
end
