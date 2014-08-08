$(document).ready(function(){
  
  var url = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=" + ip_address + "&format=json&num_of_days=1&date=today&includelocation=yes&key=42063e760fd51f59cd246ae00690eaa024a131de"

  $.get(url, function(data){

    var moodsic = new Moodsic();
    var weatherDesc = data.data.current_condition[0].weatherDesc[0].value;
    
    var content = {
      area: data.data.nearest_area[0].areaName[0].value,
      weather: weatherDesc,
      temperature: data.data.current_condition[0].temp_C,
      playlistUrl: moodsic.returnPlaylistUrlFrom(weatherDesc)
    };

    var dynamicContent = Mustache.render($('#dynamic-content').html(), content);
    $(dynamicContent).appendTo('main');

    $('body').addClass(moodsic.returnWeatherClassFrom(weatherDesc));

  });
});