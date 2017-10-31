(function () {
'use strict';

angular.module('Calculations', [])
.controller('CalculationsController', CalculationsController);

CalculationsController.$inject = ['$scope', '$filter'];
function Controller($scope, $filter) {
    $scope.breakBulkConsignments = 0;
    $scope.bulkConsignmentsQuayside = 0;
    $scope.bulkConsignmentsSilo = 0;
    $scope.containerizedConsignments = 0;
    var charge = 0;
    var result = 0;

    var calculateBreakBulkConsignment = function(){

        switch($scope.weight){
            case 0 - 2000:
                charge = 45;
                break;
            case 2001 - 5000:
                charge = 40;
                break;
            default:
                charge = 35;
                break;
        }
        $scope.result = $scope.weight * charge;

    }

    var calculateBulkConsignmentsQuayside = function(){
        var minimumCharge = 200;
        var draftSurvey = 280;
        switch($scope.weight){
            case 0 - 2000:
                charge = 35;
                break;
            case 2001 - 5000:
                charge = 30;
                break;
            default:
                charge = 25;
                break;
        }
        $scope.result = ($scope.weight * charge) + minimumCharge + draftSurvey;

    }

    var calculateBulkConsignmentsSilo = function(){
        var draftSurvey = 280;
        switch($scope.weight){
            case 0 - 2000:
                charge = 35;
                break;
            case 2001 - 5000:
                charge = 30;
                break;
            default:
                charge = 25;
                break;
        }
        $scope.result = ($scope.weight * charge) + draftSurvey;

    }

    var calculateContainerizedConsignments = function(){

        var firstCharge = 16;
        var secondCharge = 22;
        result = $scope.containerOne * firstCharge;
        result += $scope.containerTwo * secondCharge;
        $scope.result = result;

    }

    $scope.calculate = function(){
        switch(typeOfShipment){
            case breakBulkConsignments:
                calculateBreakBulkConsignment();
                break;
            case bulkConsignmentsQuayside:
                calculateBulkConsignmentsQuayside();
                break;
            case bulkConsignmentsSilo:
                calculateBulkConsignmentsSilo();
                break;
            case containerizedConsignments:
                calculateContainerizedConsignments();
                break;
        }
    }
}
})();
