RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  # config.authorize_with do
  #   redirect_to main_app.root_path unless current_user.admin == true
  # end

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  config.model BlogEntry do
    edit do     
      field :title
      field :image
      field :introduction_text
      # For RailsAdmin >= 0.5.0
      field :content, :wysihtml5
      field :featured
      field :keywords
      # For RailsAdmin < 0.5.0
      # field :description do
      #   bootstrap_wysihtml5 true
      # end
    end
  end

  config.model Event do
    edit do     
      field :title
      field :image
      field :description, :wysihtml5
      field :booking_link
      
      # For RailsAdmin < 0.5.0
      # field :description do
      #   bootstrap_wysihtml5 true
      # end
    end
  end

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration
  # config.model BlogEntry do
  #   edit do
  #     field :content
  #     field :title
  #     field :image
  #     field :introduction_text
  #     field :content, :rich_editor do
  #       config({
  #         :insert_many => true
  #       })
  #     # include_fields :title, :image, :introduction_text   
  #     end
  #   end
  #   field :title, :rich_picker do
  #     config({
  #       :allowed_styles => [:original],
  #       :view_mode => "list"
  #     })
  #   end
  #   field :image, :rich_picker do
  #     config({
  #       :allowed_styles => [:original],
  #       :view_mode => "list"
  #     })
  #   end
  # end

  
  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
