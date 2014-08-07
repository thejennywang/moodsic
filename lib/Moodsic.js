function Moodsic() {};

Moodsic.prototype.MOODS = {
	rain: 'spotify:user:spotify:playlist:7CQunpJEHecknIyABfS8pP',
	snow: 'spotify:user:spotify:playlist:4WCmHOBqKS7pac4s1lW2ZY',
	sunny: 'spotify:user:lizyeomans:playlist:4m2hgFlI5hQk85rwD3Pfvf',
	drizzle: 'spotify:user:digster.fm:playlist:78z3zbbGEYBOqbqgBpDEor',
	cloudy: 'spotify:user:1148475551:playlist:5Qcj3A86bNXxB2Yi15r1Dk',
	other: 'spotify:user:topsify:playlist:1QM1qz09ZzsAPiXphF1l4S'
};

Moodsic.prototype.IMAGES = {
	rain: 'public/images/rain.jpg',
	snow: 'public/images/snow.jpg',
	sunny: 'public/images/sunny.jpg',
	drizzle: 'public/images/drizzle.jpg',
	cloudy: 'public/images/cloudy.jpg',
	other: 'public/images/other.jpg'
};

Moodsic.prototype.MAPPING = {
	rain: ['rain', 'shower', 'thunder'],
	snow: ['ice', 'sleet', 'snow', 'blizzard'],
	drizzle: ['drizzle', 'fog', 'mist'],
	cloudy: ['overcast', 'cloudy'],
	sunny: ['clear/sunny']
};


Moodsic.prototype.returnPlaylistUrlFrom = function(weatherDesc) {
	return this._returnAssetUrl(weatherDesc, this.MOODS)
};

Moodsic.prototype.returnImageUrlFrom = function(weatherDesc) {
	return this._returnAssetUrl(weatherDesc, this.IMAGES)
};


Moodsic.prototype._returnAssetUrl = function(weatherDesc, addresses) {
	var words = weatherDesc.toLowerCase().split(' ');
	var moodsic = this;
	var result = null;
	
	words.forEach(function(word) {
		if (addresses[moodsic._mappingFor(word)]) {
			result = addresses[moodsic._mappingFor(word)];	
		}
	});

	if(result === null){ result = addresses.other; };
	return result;
};

Moodsic.prototype._mappingFor = function(word) {
	var moodsic = this;
	var result = null;

	Object.keys(moodsic.MAPPING).forEach(function(key) {

		if( moodsic.MAPPING[key].indexOf(word) !== -1 ) {
			result = key;
		};
	});
	return result; 
};