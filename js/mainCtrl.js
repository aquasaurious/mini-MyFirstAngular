angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = ["Hunnybunny", "Smuzz", "Frat", "Inka"];

    $scope.addFriend = function() {
        $scope.friends.push($scope.nufriend);
        $scope.nufriend = '';
    };
});