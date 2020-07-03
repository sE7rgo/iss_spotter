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
      printPassTimes(flyOverTimes);
    });
  });
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};