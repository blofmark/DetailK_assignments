angular.module('myApp.factory', ['ngRoute'])

    .factory('personFactory', ['$http', function ($http) {
        return {
            getPersons: function(){
                return  $http({
                    method: 'POST',
                    url: 'https://hcm-service.detailkarriere.dk/internship.php',
                    data: {
                        key: '597b1ed599b716db75fda4822552f132'
                    }
                }).then(function(response){
                    return response.data;
                });
            }
        }
    }])

    .factory('scoreFactory', ['$http', function ($http) {
        return {
            getScoreData: function () {
                return $http({
                    method: 'POST',
                    url: 'https://hcm-service.detailkarriere.dk/internship.php',
                    data: {
                        key: '72344f2d2khbd3d82djdd32dihd2334f'
                    }
                }).then(function (response) {
                    return response.data;
                });
            }
        }
    }])

