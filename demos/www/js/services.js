angular.module('starter.services', [])
  .factory('Chats', Chats)
  .factory('Demos', Demos);

function Chats() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}

function Demos() {
  return {
    css: [{
      name: 'list',
      id: 'list/list'
    }, {
      name: 'buttons',
      id: 'buttons'
    }, {
      name: 'cards',
      id: 'cards'
    }, {
      name: 'forms',
      id: 'forms'
    }, {
      name: 'toggle',
      id: 'toggle'
    }, {
      name: 'checkbox',
      id: 'checkbox'
    }, {
      name: 'radio',
      id: 'radio'
    }, {
      name: 'range',
      id: 'range'
    }, {
      name: 'select',
      id: 'select'
    }],
    javascript: [{
      name: 'action sheet',
      id: 'actionsheet'
    }, {
      name: 'backdrop',
      id: 'backdrop'
    }, {
      name: 'refresher',
      id: 'refresher'
    }, {
      name: 'loading',
      id: 'loading'
    }, {
      name: 'spinner',
      id: 'spinner'
    }, {
      name: 'modal',
      id: 'modal'
    }, {
      name: 'popover',
      id: 'popover'
    }, {
      name: 'popup',
      id: 'popup'
    }]
  }
}
