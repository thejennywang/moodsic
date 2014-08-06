describe("Moodsic", function() {

	describe('selecting a playlist', function() {

		beforeEach(function(){
			moodsic = new Moodsic();
		});

		it('should return a playlist for snow', function() {
			var weatherDesc = 'Light snow';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEqual(moodsic.MOODS.snow);
			expect(moodsic.returnImageUrlFrom(weatherDesc)).toEqual(moodsic.IMAGES.snow);
		});
	
		it('should return a playlist for rain', function() {
			var weatherDesc = 'Torrential rain shower';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEqual(moodsic.MOODS.rain);
			expect(moodsic.returnImageUrlFrom(weatherDesc)).toEqual(moodsic.IMAGES.rain);
		});

		it('should return a playlist for sunny', function() {
			var weatherDesc = 'Clear/Sunny';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEqual(moodsic.MOODS.sunny);
			expect(moodsic.returnImageUrlFrom(weatherDesc)).toEqual(moodsic.IMAGES.sunny);
		});

		it('should return a playlist for drizzle', function() {
			var weatherDesc = 'Light drizzle';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEqual(moodsic.MOODS.drizzle);
			expect(moodsic.returnImageUrlFrom(weatherDesc)).toEqual(moodsic.IMAGES.drizzle);
		});

		it('should return a playlist for cloudy', function() {
			var weatherDesc = 'Overcast';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEqual(moodsic.MOODS.cloudy);
			expect(moodsic.returnImageUrlFrom(weatherDesc)).toEqual(moodsic.IMAGES.cloudy);
		});

		it('should return a default playlist', function() {
			var weatherDesc = 'sdfgfdh';
			expect(moodsic.returnPlaylistUrlFrom(weatherDesc)).toEqual(moodsic.MOODS.other);
			expect(moodsic.returnImageUrlFrom(weatherDesc)).toEqual(moodsic.IMAGES.other);
		});

	});

});