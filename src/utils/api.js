import axios from 'axios';

var APIKey = '&APPID=257be0e3eedefb32c39130aa82d01da3';

function currentWeather(city){
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + APIKey);
}

function fiveDay(city){
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=  ' + city + APIKey + '&cnt=6' );
}

module.exports = {
        getWeather: function(city){
                return axios.all([currentWeather(city),fiveDay(city)]);
        },
        getTimeLocation(long, lat){
            var APIKey = 'AIzaSyC6fSNUMEi7ZJjT_w739zBKKAuwf4Q9gso';

            return axios.get('https://maps.googleapis.com/maps/api/timezone/json?location='+ long + ',' + lat + '&timestamp=1458000000&key=' + APIKey);
        }
}
