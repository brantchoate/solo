angular.module('brantApp',[])
.controller('weeklyArtist', ['$scope','$http', function ($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=garnett3&api_key=24868f1c604879f7481eb08683dda7e5&format=json')
  .success(function(data){
    $scope.artists = data.weeklyartistchart.artist;
  });
}])
.controller('recentTracks', ['$scope','$http', function ($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=garnett3&api_key=24868f1c604879f7481eb08683dda7e5&format=json')
  .success(function(data){
    console.log(data);
    $scope.recentTracks = data.recenttracks.track;
  });
}]);