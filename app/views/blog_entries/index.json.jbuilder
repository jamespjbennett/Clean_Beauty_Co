json.array!(@blog_entries) do |blog_entry|
  json.extract! blog_entry, :id
  json.url blog_entry_url(blog_entry, format: :json)
end
