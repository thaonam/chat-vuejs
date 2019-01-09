new Vue({
  el: '#app',
  data: {
    deleteLater: "Hello World",
    connectedUsers: ['User a', 'User b'],
    messages: [],
    message: {
      "type": "",
      "action": "",
      "user": "",
      "text": "",
      "timestmap": ""
    },
    areTyping: []
  },
  created: function () {

  },
  methods: {
    send: function () {

    },
    userIsTyping: function (username) {

    },
    userAreTyping: function () {

    },
    stoppedTypinng: function () {

    }
  }
});
