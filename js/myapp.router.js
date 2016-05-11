myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/listmahasiswa")
      
      $stateProvider
        .state('mahasiswa', {
            url: "/listmahasiswa",
            templateUrl: "partials/list-mahasiswa.html",
            controller: "ControllerMahasiswa"
        })
        .state('detail-mahasiswa', {
            url: "/detailmahasiswa/:id",
            templateUrl: "partials/detail-mahasiswa.html",
            controller: "ControllerDetailMahasiswa"
        })
        .state('route1', {
            url: "/route1",
            templateUrl: "partials/route1.html"
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "partials/route1.list.html",
            controller: function($scope){
              $scope.items = ["Item-1", "Item-2", "Item-3", "Item-4"];
            }
        })
        .state('route2', {
            url: "/route2",
            templateUrl: "partials/route2.html"
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "partials/route2.list.html",
            controller: function($scope){
              $scope.things = ["Thing-1", "Thing-2", "Thing-3", "Thing-4"];
            }
        })
    })