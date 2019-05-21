channel_name = "WebNotificationsChannel";

App.room = App.cable.subscriptions.create(
  channel_name,
  {
    connected: () => {
      console.log(channel_name, 'connected');
    },

    disconnected: () => {
      console.log(channel_name, 'disconnected');
    },

    received: (data) => {
      console.log(channel_name, 'received', data);

      // const elem = document.querySelectorAll('messages');
      // elem.appendChild(data['message']);
      // $('#messages').append(data['message']);
    }
  }
);