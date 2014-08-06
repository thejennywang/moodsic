function Moodsic() {};

Moodsic.prototype.MOODS = {
	rain: 'spotify:user:spotify:playlist:7CQunpJEHecknIyABfS8pP',
	snow: 'spotify:user:spotify:playlist:4WCmHOBqKS7pac4s1lW2ZY',
	sunny: 'spotify:user:lizyeomans:playlist:4m2hgFlI5hQk85rwD3Pfvf',
	drizzle: 'spotify:user:digster.fm:playlist:78z3zbbGEYBOqbqgBpDEor',
	cloudy: 'spotify:user:1148475551:playlist:5Qcj3A86bNXxB2Yi15r1Dk',
	other: 'spotify:user:topsify:playlist:1QM1qz09ZzsAPiXphF1l4S'
}

Moodsic.prototype.MAPPING = {
	rain: ['rain', 'shower', 'thunder'],
	snow: ['ice', 'sleet', 'snow', 'blizzard'],
	drizzle: ['drizzle', 'fog', 'mist'],
	cloudy: ['overcast', 'cloudy'],
	sunny: ['sunny']
}

Moodsic.prototype.returnPlaylistUrlFrom = function(weatherDesc) {

return this.MOODS[this._mappingFor(weatherDesc)];

};


Moodsic.prototype._mappingFor = function(word) {
	
	if( this.MAPPING.rain.indexOf(word) !== -1 ) {
		return 'rain';
	} else {
		return 'other';
	};

};