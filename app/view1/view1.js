'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ($scope, $http) {
  $scope.orderProp = 'CustomerID';

  $http.get('contacts/contacts.json').then(function(response) {
    $scope.contacts = response.data.AddressBook.Contact;
    console.log(self.contacts);
  });

  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});
