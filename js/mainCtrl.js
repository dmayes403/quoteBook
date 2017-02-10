angular.module('quoteBook')
    .controller('mainCtrl', function($scope, srvc){

      $scope.quotes = srvc.getQuotes();

      $scope.deleteQuote = function(textToDelete){
        srvc.removeData(textToDelete);
      }

      $scope.addQuote = function(){
        var newQuote = {
          text: $scope.newQuoteText,
          author: $scope.newQuoteAuthor
        }
        if(srvc.addData(newQuote)){
          
          $scope.newQuoteText = '';
          $scope.newQuoteAuthor = '';
        }
      }

    });
