namespace :ckeditor do
  desc 'Create nondigest versions of some ckeditor assets (e.g. moono skin png)'
  task :create_nondigest_assets do
    fingerprint = /\-[0-9a-f]{32}\./
    for file in Dir[File.join('public/assets/ckeditor', '**', '*.js'),
                    File.join('public/assets/ckeditor', '**', '*.js.gz'),
                    File.join('public/assets/ckeditor', '**', '*.css'),
                    File.join('public/assets/ckeditor', '**', '*.png'),
                    File.join('public/assets/ckeditor', '**', '*.gif')]
      next unless file =~ fingerprint
      nondigest = file.sub fingerprint, '.' # contents-0d8ffa186a00f5063461bc0ba0d96087.css => contents.css
      FileUtils.cp file, nondigest, verbose: true
    end
  end
end