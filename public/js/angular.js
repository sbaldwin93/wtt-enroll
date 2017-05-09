(function() {
	angular.module('wttEnrollmentForm', [])
	angular.module('wttEnrollmentForm').controller('mainController', ['$scope', '$http', function($scope, $http) {
		$scope.belizePrograms = [
			{
				name: '2017 Belize 10 Day Marine Conservation Expedition',
				price: '$3,206'
			}
		];
		$scope.belize = function() {
			return $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "Costa Rica" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.canadaPrograms = [
			{
				name: '2017 Canada 10 Day Cultural Journey',
				price: '$2,113'
			}
		];
		$scope.canada = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "China" && $scope.destination !== "Costa Rica" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.chinaPrograms = [
			{
				name: '2017 China 15 Day Panda Expedition',
				price: '$1,035'
			},
			{
				name: '2017 China 15 Day Cultural Journey: East China',
				price: '$2,572'
			},
			{
				name: '2017 China 15 Day Cultural Journey: Trekking',
				price: '$3,004'
			}
		];
		$scope.china = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "Costa Rica" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.costaRicaPrograms = [
			{
				name: '2017 Costa Rica 10 Day Osa Wildlife Conservation Expedition',
				price: '$1,910'
			},
			{
				name: '2017 Costa Rica 15 Day Sea Turtle Conservation Expedition',
				price: '$2,444'
			},
			{
				name: '2017 Costa Rica 10 Day Surf and Service Program',
				price: '$2,133'
			},
			{
				name: '2017 Costa Rica 10 Day Service Adventure',
				price: '$1,607'
			},
			{
				name: '2017 Costa Rica 15 Day Service Adventure',
				price: '$1,971'
			},
			{
				name: '2017 Costa Rica 21 Day Service Adventure',
				price: '$2,646'
			},
			{
				name: '2017 Costa Rica 30 Day Service Adventure',
				price: ' '
			}
		];
		$scope.costaRica = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.francePrograms = [
			{
				name: '2017 France 10 Day Cultural Journey',
				price: '$2,315'
			},
			{
				name: '2017 France 15 Day Cultural Journey',
				price: '$3,422'
			}
		];
		$scope.france = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "Costa Rica" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.guatemalaPrograms = [
			{
				name: '2017 Guatemala 10 Day Service Adventure',
				price: '$1,715'
			},
			{
				name: '2017 Guatemala 15 Day Service Adventure',
				price: '$2,614'
			},
			{
				name: '2017 Guatemala 21 Day Service Adventure',
				price: '$3,112'
			},
			{
				name: '12-Day Guatemala Environmental Leadership Course',
				price: '$2,761'
			}
		];
		$scope.guatemala = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Costa Rica" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.peruPrograms = [
			{
				name: '2017 Peru 15 Day Service Adventure',
				price: '$3,794'
			},
			{
				name: '2017 Peru 21 Day Service Adventure',
				price: '$3,814'
			},
			{
				name: '2017 Peru 30 Day Service Adventure',
				price: '$4,307'
			},
						{
				name: '15-Day Amazon to Andes Expedition: Ocelots',
				price: '$UNDEFINED'
			}
		];
		$scope.peru = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Costa Rica" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.senegalPrograms = [
			{
				name: '2017 Senegal 15 Day Service Adventure ',
				price: '$4,050'
			},
			{
				name: '2017 Senegal 21 Day Service Adventure ',
				price: '$4,226'
			}
		];
		$scope.senegal = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Costa Rica" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.spainPrograms = [
			{
				name: '2017 Spain North 15 Day Cultural Journey',
				price: '$3,949'
			}
		];
		$scope.spain = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Costa Rica" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.spainToMoroccoPrograms = [
			{
				name: '2017 Spain/Morocco 15 Day Cultural Journey',
				price: '$4,111'
			}
		];
		$scope.spainToMorocco = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Costa Rica" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA"&& $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.thailandPrograms = [
			{
				name: '2017 Thailand 15 Day Elephant Expedition',
				price: '$2,876'
			},
			{
				name: '2017 Thailand 21 Day Elephant Expedition',
				price: '$3,746'
			}
		];
		$scope.thailand = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Costa Rica" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA"&& $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.italyPrograms = [
			{
				name: '2017 Italy 15 Day Culinary Journey',
				price: '$UNDEFINED'
			}
		];
		$scope.italy = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Costa Rica" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		}
		$scope.ecuadorPrograms = [
			{
				name: '11-Day Galapagos Wildlife Expedition',
				price: '$4,965'
			}
		];
		$scope.ecuador = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Costa Rica" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.panamaPrograms = [
			{
				name: '15-Day Panama Primate Research Expedition',
				price: '$UNDEFINED'
			}
		];
		$scope.panama = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Costa Rica" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.southAfricaPrograms = [
			{
				name: '15-Day Leopard Conservation? C4C?',
				price: '$UNDEFINED'
			}
		];
		$scope.southAfrica = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "Costa Rica" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.cubaPrograms = [
			{
				name: 'Viva la Revolucion',
				price: '$UNDEFINED'
			}
		];
		$scope.cuba = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Costa Rica" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.usaPrograms = [
			{
				name: 'California Coast',
				price: '$UNDEFINED'
			}
		];
		$scope.usa = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "Costa Rica" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.bhutanPrograms = [
			{
				name: 'Land of the Thunder Dragon',
				price: '$8,060'
			}
		];
		$scope.bhutan = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Costa Rica" && $scope.destination !== "Australia" && $scope.destination !== "Japan" ;
		};
		$scope.australiaPrograms = [
			{
				name: 'Wildlife of Australia',
				price: ''
			}
		];
		$scope.australia = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Costa Rica" && $scope.destination !== "Japan" ;
		};
		$scope.japanPrograms = [
			{
				name: 'Journey into the Hermit Kingdom',
				price: '$UNDEFINED'
			}
		];
		$scope.japan = function() {
			return $scope.destination !== "Belize" && $scope.destination !== "Canada" && $scope.destination !== "China" && $scope.destination !== "France" && $scope.destination !== "Guatemala" && $scope.destination !== "Peru" && $scope.destination !== "Senegal" && $scope.destination !== "Spain" && $scope.destination !== "Spain to Morocco" && $scope.destination !== "Thailand" && $scope.destination !== "Italy" && $scope.destination !== "Ecuador" && $scope.destination !== "Panama" && $scope.destination !== "South Africa" && $scope.destination !== "Cuba" && $scope.destination !== "USA" && $scope.destination !== "Bhutan" && $scope.destination !== "Australia" && $scope.destination !== "Costa Rica" ;
		};
		$scope.getCost = function(program) {
			$scope.allPrograms = [];
			$scope.selectedProgram = [];
			$scope.price = undefined;
			$scope.allPrograms.push(program);
			var test = function() {
				for(var i = 0; i < $scope.allPrograms.length; i++) {
					if($scope.allPrograms[i].name == $scope.programs) {
						$scope.selectedProgram.push($scope.allPrograms[i]);
					}
				}
				for(var j = 0; j < $scope.selectedProgram.length; j++) {
					$scope.price = $scope.selectedProgram[j].price;
					$scope.cost = $scope.price
				}
				return $scope.cost	
			}
			return test()
		}
		$scope.isReferral = function() {
			return $scope.referral == "Referral";
		}
		$scope.isSelected = function() {
			return $scope.programs !== undefined;
		}
	}]);
}());




































