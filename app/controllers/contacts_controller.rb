class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    subject = params[:contact][:subject]
    message = params[:contact][:message]
    if !subject
      subject = "no subject"
    end
    if !message
      subject = "no message"
    end
    ActionMailer::Base.mail(from: params[:contact][:email], to: "jamespjbennett@gmail.com", subject: params[:contact][:subject], body: params[:contact][:message]).deliver_now
    # @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
end