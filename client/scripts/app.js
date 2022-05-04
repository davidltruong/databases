var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


    // Poll for new messages every 3 sec
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log('data', data);
      console.log('dataresult', data.results);
      // Only update if we have messages.
      // if (data.results && data.results.length) {
      console.log('data?');
      Rooms.update(data.results, RoomsView.render);
      Messages.update(data.results, MessagesView.render);

      callback();
      // }
      return;

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    console.log('stopSpinner');
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};