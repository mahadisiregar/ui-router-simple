myapp.controller('ControllerDetailMahasiswa', function($scope, $stateParams, $http) {
    $http.get('js/data/' + $stateParams.id + '.json').success(function(mahasiswa) {
      $scope.mahasiswa = mahasiswa;
    });
  });