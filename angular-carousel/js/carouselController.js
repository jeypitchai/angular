angular.module('MyApp', ['angular-carousel'])
	.controller('CarouselCtrl', function ($scope) {

		// Set of Photos
		$scope.photos = [
			{src: 'C:/Users/Public/Pictures/Sample Pictures/Chrysanthemum.jpg', desc: 'Image 01'},
			{src: 'C:/Users/Public/Pictures/Sample Pictures/Tulips.jpg', desc: 'Image 02'},
			{src: 'C:/Users/Public/Pictures/Sample Pictures/Penguins.jpg', desc: 'Image 03'},
			{src: 'C:/Users/Public/Pictures/Sample Pictures/Hydrangeas.jpg', desc: 'Image 04'}
		];
	});
	