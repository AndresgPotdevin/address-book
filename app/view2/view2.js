'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function ($scope, $http) {
  $scope.orderProp = 'CustomerID';

  $http.get('contacts/contacts.json').then(function(response) {
    $scope.contacts = response.data.AddressBook.Contact;
    console.log(self.contacts);
  });
});
