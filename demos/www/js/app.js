// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:
  .state('tab.demos', {
    url: '/demos',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos.html',
        controller:'DemosCtrl'
      }
    }
  })
  .state('tab.demos-list', {
    url: '/demos/list/:title',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-list.html',
        controller: 'ListCtrl'
      }
    }
  })
  .state('tab.demos-buttons', {
    url: '/demos/buttons',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-buttons.html'
      }
    }
  })
  .state('tab.demos-cards', {
    url: '/demos/cards',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-cards.html'
      }
    }
  })
  .state('tab.demos-forms', {
    url: '/demos/forms',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-forms.html'
      }
    }
  })
  .state('tab.demos-toggle', {
    url: '/demos/toggle',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-toggle.html',
        controller:'ToggleCtrl'
      }
    }
  })
  .state('tab.demos-checkbox', {
    url: '/demos/checkbox',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-checkbox.html',
        controller:'CheckboxCtrl'
      }
    }
  })
  .state('tab.demos-radio', {
    url: '/demos/radio',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-radio.html',
        controller:'RadioCtrl'
      }
    }
  })
  .state('tab.demos-range', {
    url: '/demos/range',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-range.html'
      }
    }
  })
  .state('tab.demos-select', {
    url: '/demos/select',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-select.html'
      }
    }
  })
  .state('tab.demos-actionsheet', {
    url: '/demos/actionsheet',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-actionsheet.html',
        controller:'ActionSheetCtrl'
      }
    }
  })
  .state('tab.demos-backdrop', {
    url: '/demos/backdrop',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-backdrop.html',
        controller:'BackdropCtrl'
      }
    }
  })
  .state('tab.demos-refresher', {
    url: '/demos/refresher',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-refresher.html',
        controller:'RefresherCtrl'
      }
    }
  })
  .state('tab.demos-loading', {
    url: '/demos/loading',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-loading.html',
        controller:'LoadingCtrl'
      }
    }
  })
  .state('tab.demos-spinner', {
    url: '/demos/spinner',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-spinner.html'
      }
    }
  })
  .state('tab.demos-modal', {
    url: '/demos/modal',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-modal.html',
        controller:'ModalCtrl'
      }
    }
  })
  .state('tab.demos-popover', {
    url: '/demos/popover',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-popover.html',
        controller:'PopoverCtrl'
      }
    }
  })
  .state('tab.demos-popup', {
    url: '/demos/popup',
    views: {
      'tab-demos': {
        templateUrl: 'templates/tab-demos-popup.html',
        controller:'PopupCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/demos');

});
