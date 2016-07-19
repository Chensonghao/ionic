angular.module('starter.controllers', [])
  .controller('DemosCtrl', DemosCtrl)
  .controller('ListCtrl', ListCtrl)
  .controller('ToggleCtrl', ToggleCtrl)
  .controller('CheckboxCtrl', CheckboxCtrl)
  .controller('RadioCtrl', RadioCtrl)
  .controller('ActionSheetCtrl', ActionSheetCtrl)
  .controller('BackdropCtrl', BackdropCtrl)
  .controller('RefresherCtrl', RefresherCtrl)
  .controller('LoadingCtrl', LoadingCtrl)
  .controller('ModalCtrl', ModalCtrl)
  .controller('PopoverCtrl', PopoverCtrl)
  .controller('PopupCtrl', PopupCtrl)
  .controller('AccountCtrl', AccountCtrl);



DemosCtrl.$inject = ['$scope', 'Demos'];

function DemosCtrl($scope, Demos) {
  $scope.demos = Demos;
}
ListCtrl.$inject = ['$scope', 'Chats', '$stateParams'];

function ListCtrl($scope, Chats, $stateParams) {
  $scope.title = $stateParams.title;
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}

ToggleCtrl.$inject = ['$scope'];

function ToggleCtrl($scope) {
  $scope.html5 = true;
  $scope.css3 = true;
  $scope.javascript = true;
  $scope.angular = false;
  $scope.react = false;
}

CheckboxCtrl.$inject = ['$scope'];

function CheckboxCtrl($scope) {
  $scope.filter = {
    red: true,
    yellow: false,
    pink: true,
    black: true
  };
}

RadioCtrl.$inject = ['$scope'];

function RadioCtrl($scope) {
  $scope.choice = 3;
}

ActionSheetCtrl.$inject = ['$scope', '$ionicActionSheet', '$timeout'];

function ActionSheetCtrl($scope, $ionicActionSheet, $timeout) {
  $scope.show = function() {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [{
        text: '<b>Share</b> This'
      }, {
        text: 'Move'
      }],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
        console.log('cancel');
      },
      destructiveButtonClicked: function() {
        return true;
      },
      buttonClicked: function(index, a) {
        console.log(index, a.text);
        return true;
      }
    });
    // For example's sake, hide the sheet after two seconds
    //    $timeout(function() {
    //      hideSheet();
    //    }, 2000);
  };
  $scope.show();
}

BackdropCtrl.$inject = ['$scope', '$ionicBackdrop', '$timeout', '$rootScope'];

function BackdropCtrl($scope, $ionicBackdrop, $timeout, $rootScope) {
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };

  // Execute action on backdrop disappearing
  $scope.$on('backdrop.hidden', function() {
    // Execute action
    console.log('backdrop is hidden!');
  });

  // Execute action on backdrop appearing
  $scope.$on('backdrop.shown', function() {
    // Execute action
    console.log('backdrop is shown!');
  });
  $scope.action();
}

RefresherCtrl.$inject = ['$scope'];

function RefresherCtrl($scope) {
  $scope.items = [1, 2, 3];
  var ix = 1;
  $scope.doRefresh = function() {
    ix++;
    $scope.items = [ix + 1, ix + 2, ix + 3];
    $scope.$broadcast('scroll.refreshComplete');
    //   $http.get('/new-items')
    //     .success(function(newItems) {
    //       $scope.items = newItems;
    //     })
    //     .finally(function() {
    //       // Stop the ion-refresher from spinning
    //       $scope.$broadcast('scroll.refreshComplete');
    //     });
    // };
  }
}

LoadingCtrl.$inject = ['$scope', '$ionicLoading', '$timeout'];

function LoadingCtrl($scope, $ionicLoading, $timeout) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    }).then(function() {
      console.log("The loading indicator is now displayed");
    });
    $timeout($scope.hide, 2000);
  };
  $scope.hide = function() {
    $ionicLoading.hide().then(function() {
      console.log("The loading indicator is now hidden");
    });
  };
  $scope.show();
}

ModalCtrl.$inject = ['$scope', '$ionicModal'];

function ModalCtrl($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
}

PopoverCtrl.$inject = ['$scope', '$ionicPopover'];

function PopoverCtrl($scope, $ionicPopover) {
  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
}

PopupCtrl.$inject = ['$scope', '$ionicPopup', '$timeout'];

function PopupCtrl($scope, $ionicPopup, $timeout) {
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {};
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.wifi">',
      title: 'Enter Wi-Fi Password',
      subTitle: 'Please use normal things',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });

    $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

  // A confirm dialog
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Consume Ice Cream',
      template: 'Are you sure you want to eat this ice cream?'
    });

    confirmPopup.then(function(res) {
      if (res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };

  // An alert dialog
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Don\'t eat that!',
      template: 'It might taste good'
    });

    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };
}

AccountCtrl.$inject = ['$scope'];

function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}
