var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    //$scope.title = house_db['title'];
    var image_length_list = [
    	{
    		'index' : '0',
    		'img' : house_db['activeImg']
    	}
    ];
    for (let i = 0; i < house_db['images'].length; i++) {
    	var index = i + 1;
    	image_length_list.push(
    		{
    			'index' : index.toString(),
    			'img' : house_db['images'][i]
    		}
    	);
    }
    $scope.house_db = house_db;
    $scope.image_length_list = image_length_list
});