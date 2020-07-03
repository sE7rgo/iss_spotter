const { fetchMyIP } = require('./iss');

const { fetchCoordsByIP } = require('./iss');

const { fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
      console.log('It worked! Returned Fly Over:\n', flyOverTimes);
    });
  });
});


