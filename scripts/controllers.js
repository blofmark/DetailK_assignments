angular.module('myApp.controllers', ['ngRoute'])

    .controller('task1Ctrl', ['$scope', 'personFactory', function ($scope, personFactory) {
        $scope.headline = 'Assignment 1';


        personFactory.getPersons().then(function (response) {
            $scope.persons = response;
            $scope.changeName();
           /* $scope.searchQuery = [];
*/
        });

        $scope.changeName = function () {

            angular.forEach($scope.persons, function (data, i) {
                var bob = "(bob)", bib = "(bib)";
                if (i % 3 == 0) {

                    $scope.updatedPersons = angular.copy($scope.persons[i]);
                    $scope.updatedPersons = {name: data.name + bib};
                    $scope.persons[i] = $scope.updatedPersons;

                    /*  $scope.persons.push($scope.newPersons);*/
                } else if (i % 5 == 4) {
                    $scope.newPersons = angular.copy($scope.persons[i]);
                    $scope.newPersons = {name: data.name + bob};
                    /* console.log($scope.newPersons);*/
                    $scope.persons[i] = $scope.newPersons;
                    /*console.log($scope.persons);*/

                } else {
                    $scope.persons;
                    console.log($scope.persons);

                }
            })

        }


    }])

    .
    controller('task2Ctrl', ['$scope', 'scoreFactory', function ($scope, scoreFactory) {
        $scope.headline = 'Assignment 2';

        scoreFactory.getScoreData().then(function (response) {
            $scope.scoreData = response;
            console.log(response);
        });

        $scope.setColor = function (scores) {
            if (scores < 33) {
                return "red";
            } else if ((scores > 33) && (scores < 66)) {
                return "yellow";
            } else if ((scores > 66) && (scores < 100)) {
                return "green";
            }

        }


    }])

