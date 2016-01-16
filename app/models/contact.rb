class Contact < MailForm::Base
  attribute :name      
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :subject
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    binding.pry
    {
      :subject => "My Contact Form",
      :to => "info@cleanbeauty.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end