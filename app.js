(function() {

	var app = angular.module('ageApp', []);
  
	app.directive('calculateAge', function() {
		return {
			restrict: 'E',
			templateUrl: 'calculate-age.html',
			controller: function() {
				var y=0;
				var m=0;
				var d=0;
				this.d1=0;
				this.d1m=0;
				this.d1y=0;
				this.d2=0;
				this.d2m=0;
				this.d2y=0;
				this.calculate=function() {
					this.days=((this.d1y-this.d2y)*360) + (this.d1m-this.d2m)*30 + (this.d1-this.d2);
					y=this.days/(360);
					m=(this.days/30)-(parseInt(y)*12);
					d=(this.days)-parseInt(y)*360-parseInt(m)*30;
					this.remDays=parseInt(d);
					this.years=parseInt(y);
					this.months=parseInt(m);
					this.hours=this.days*24;
					this.minutes=this.hours*60;
				};
				this.reset=function() {
					this.d1=0;
					this.d1m=0;
					this.d1y=0;
					this.d2=0;
					this.d2m=0;
					this.d2y=0;
					this.years=0;
					this.months=0;
					this.days=0;
					this.remDays=0;
					this.hours=0;
					this.minutes=0;
				};
			},
			controllerAs: 'diffCtrl'
		};
	});
})();
