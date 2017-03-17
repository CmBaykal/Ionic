angular.module('index.controllers', [])

.controller('indexCtrl', function($scope, $ionicModal, $timeout) {

$scope.getindex = function(e)
{
  var site = window.open( e,'_blank',"hidden=yes,location=no,clearsessioncache=no,clearcache=no");
  site.addEventListener( 'loadstop', function() {
                  site.executeScript(
                      { code: "document.body.innerHTML" },
                      function(index)
                      {
                        alert(index[0]);
                      }
                  );
              });

}

});
