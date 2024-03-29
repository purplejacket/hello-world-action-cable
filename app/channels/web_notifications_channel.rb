class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "web_notifications_channel"

    debug('subscribed')
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed

    debug('unsubscribed')
  end

  def debug(msg)
    puts "*** #{msg}"
  end
end
