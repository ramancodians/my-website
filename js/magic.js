// Coded by Raman Choudhary

var app = angular.module('batman',['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/work', {
                templateUrl: 'views/work.html',
                controller: 'WorkCtrl'
            })
        .when('/work/:project', {
                templateUrl: 'views/project.html',
                controller: 'ProjectCtrl'
            })
        .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
        .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  }]);


app.controller('MainCtrl',function($scope){
    $scope.test = 'Supper';
});

app.controller('WorkCtrl',function($scope){
    $scope.test = 'woking';
});

app.controller('HomeCtrl',function($scope){
    $scope.test = 'woking';
});

app.controller('ContactCtrl',function($scope){
    $scope.test = 'woking';
});


app.controller('AboutCtrl',function($scope){
    $scope.test = 'woking';
});

app.controller('ProjectCtrl',function($scope,$routeParams){
    $scope.test = 'woking';
    
    console.log($routeParams);
});