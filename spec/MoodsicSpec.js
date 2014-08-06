describe("Moodsic", function() {

	describe('selecting a playlist', function() {

		beforeEach(function(){
			moodsic = new Moodsic;
		});

		it('should return a playlist for snow', function() {
			var weatherDesc = 'Patchy light snow in area with thunder';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEq(moodsic.MOODS.snow);
		});
	
		it('should return a playlist for rain', function() {
			var weatherDesc = 'Torrential rain shower';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEq(moodsic.MOODS.rain);
		});

		it('should return a playlist for sunny', function() {
			var weatherDesc = 'Clear/Sunny';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEq(moodsic.MOODS.sunny);
		});

		it('should return a playlist for drizzle', function() {
			var weatherDesc = 'Light drizzle';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEq(moodsic.MOODS.drizzle);
		});

		it('should return a playlist for cloudy', function() {
			var weatherDesc = 'Overcast';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEq(moodsic.MOODS.cloudy);
		});

		it('should return a default playlist', function() {
			var weatherDesc = 'sdfgfdh';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEq(moodsic.MOODS.other);
		});

	});

});