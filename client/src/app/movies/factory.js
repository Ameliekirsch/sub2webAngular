(function(){
	'use strict';

	function MovieService($http) {
		
		var service ={};

		service.movie =[]; //MovieService.movie =[];
		service.getMovie = function (){

			var key ='4720b8256db75a8c9f80b444c2455109';

			return $http.get('https://api.themoviedb.org/3/movie/popular',{
				params:{
					api_key: key
				}
			})
			.success(function (data){
				service.movie = data;

			})
			.error(function () {
				console.log('error');

			});


		};

		return service;


	}

	angular.module('service.movie', [])
		.factory('MovieService', MovieService);
})();