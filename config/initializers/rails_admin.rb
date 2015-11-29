RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0
  # config.model 'League' do
  #     list do
  #       # all selected fields will be added, but you can't configure them.
  #       # If you need to select them by type, see *fields_of_type*
  #       include_fields_if do
  #         name =~ /displayed/
  #       end

  #       include_fields :name, :title                # simply adding fields by their names (order will be maintained)
  #       fields :created_at, :updated_at do          # adding and configuring
  #         label do
  #           "#{label} (timestamp)"
  #         end
  #       end
  #     end
  #   end


  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration
  config.model BlogEntry do
    edit do
      field :content
      field :title
      field :image
      field :introduction_text
      field :content, :rich_editor do
        config({
          :insert_many => true
        })
      # include_fields :title, :image, :introduction_text   
      end
    end
    field :title, :rich_picker do
      config({
        :allowed_styles => [:original],
        :view_mode => "list"
      })
    end
    field :image, :rich_picker do
      config({
        :allowed_styles => [:original],
        :view_mode => "list"
      })
    end
  end

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
