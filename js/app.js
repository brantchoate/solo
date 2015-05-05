angular.module('brantApp',['uiGmapgoogle-maps'])
.config(['$httpProvider','uiGmapGoogleMapApiProvider', function ($httpProvider, uiGmapGoogleMapApiProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCIn_GXYhaLovUyGxfk0oTvrx0Yd2FR_Aw',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}])
.controller('mainCtrl', ['$scope','$location', function ($scope, $location) {
    ///TODO SCAFFOLD OUT DATA BETTER
}])
.controller('weeklyArtist', ['$scope','$http', function ($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=garnett3&api_key=24868f1c604879f7481eb08683dda7e5&format=json&period=7day&limit=7')
  .success(function(data){
    console.log(data);
    $scope.artists = data.topartists.artist;
  });
}])
.controller('recentTracks', ['$scope','$http', function ($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=garnett3&api_key=24868f1c604879f7481eb08683dda7e5&format=json')
  .success(function(data){
    console.log(data);
    $scope.recentTracks = data.recenttracks.track;
  });
}])
.controller('checkins', ['$scope','$http','uiGmapGoogleMapApi', function ($scope, $http, uiGmapGoogleMapApi) {
    $http.get('https://api.foursquare.com/v2/users/self/checkins?oauth_token=DKVKKFK4RY3BVY3X2EAJVIMUTXQ23A4WOMGWTR32HKBNOCGJ&v=20150301&m=swarm')
    .success(function(data){
        $scope.checkins = data.response.checkins.items;
        $scope.markers = (function(){
            return $scope.checkins.map(function(val, k){
                return {
                    latitude: val.venue.location.lat,
                    longitude: val.venue.location.lng,
                    title: 'test',
                    id: val.id
                };
            });
        }());
        uiGmapGoogleMapApi.then(function(maps) {

        });
    });
    $scope.map = { 
        center: { 
            latitude: 37.8, 
            longitude: -122.4 
        }, 
        zoom: 13,
        bounds: {} 
    };
    $scope.mapOpts = {
        scrollwheel: false
    };
}])
.controller('computerTime', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/rescuetime.json')
    .success(function(data){
        $scope.computerTime = data;
    });
}])
.controller('instaPics', ['$scope','$http', function ($scope, $http) {
    $http.get('data/insta.json')
    .success(function(data){
        $scope.instaPics = data.data;
    });
}])
.controller('githubCommits', ['$scope','$http', function ($scope, $http) {
    $http.get('https://api.github.com/repos/brantchoate/solo/commits')
    .success(function(data){
        console.log(data);
        $scope.commits = data;
    });
}])
.filter('time', function(){
    return function(input){
        return moment.unix(input).format('MMMM Do YYYY, h:mm:ss a');
    };
});