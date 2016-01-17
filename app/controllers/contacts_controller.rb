
class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    subject = params[:contact][:subject]
    message = params[:contact][:message]
    EmailContact.create(email: params[:contact][:email])
    if !subject
      subject = "no subject"
    end
    if !message
      message = "no message"
    end
    ActionMailer::Base.mail(from: params[:contact][:email], to: "cleanbeautyco2015@gmail.com", subject: subject, body: message).deliver_now
    # @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
    if params[:subscribe]
      @first_message_text = "Thanks for subscribing!"
      @second_message_text = "Keep your eyes peeled for Clean Beauty Co updates."
    else
      @first_message_text = "Thank you for your message."
      @second_message_text = "We'll get back to you soon."
    end
  end
end