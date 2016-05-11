myapp.controller('ControllerMahasiswa', function($scope, $http){
	$http.get('js/data/mahasiswa.json').success(function(mahasiswas) {
      $scope.mahasiswas = mahasiswas;
    });
});