function Moodsic() {};

Moodsic.prototype.MOODS = {
	rain: 'spotify:user:spotify:playlist:7CQunpJEHecknIyABfS8pP',
	snow: 'spotify:user:spotify:playlist:4WCmHOBqKS7pac4s1lW2ZY',
	sunny: 'spotify:user:lizyeomans:playlist:4m2hgFlI5hQk85rwD3Pfvf',
	drizzle: 'spotify:user:digster.fm:playlist:78z3zbbGEYBOqbqgBpDEor',
	cloudy: 'spotify:user:1148475551:playlist:5Qcj3A86bNXxB2Yi15r1Dk',
	other: 'spotify:user:topsify:playlist:1QM1qz09ZzsAPiXphF1l4S'
};

Moodsic.prototype.MAPPING = {
	rain: ['rain', 'shower', 'thunder'],
	snow: ['ice', 'sleet', 'snow', 'blizzard'],
	drizzle: ['drizzle', 'fog', 'mist'],
	cloudy: ['overcast', 'cloudy'],
	sunny: ['clear/sunny']
};

Moodsic.prototype.returnPlaylistUrlFrom = function(weatherDesc) {
	var words = weatherDesc.toLowerCase().split(' ');
	var moodsic = this;
	var result = null;
	
	words.forEach(function(word) {
	  if (moodsic.MOODS[moodsic._mappingFor(word)]) {
	  	result = moodsic.MOODS[moodsic._mappingFor(word)];	
	  }
	});

	if(result === null){ result = this.MOODS.other; };

	return result;
};


Moodsic.prototype._mappingFor = function(word) {
	
	if( this.MAPPING.rain.indexOf(word) !== -1 ) {
		return 'rain';
	
	} else if (this.MAPPING.snow.indexOf(word) !== -1) {
		return 'snow';
	
	} else if (this.MAPPING.sunny.indexOf(word) !== -1) {
		return 'sunny';
	
	} else if (this.MAPPING.cloudy.indexOf(word) !== -1) {
		return 'cloudy';
	
	} else if (this.MAPPING.drizzle.indexOf(word) !== -1) {
		return 'drizzle';
	
	};

};