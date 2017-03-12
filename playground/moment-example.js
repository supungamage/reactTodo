var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log(now.unix());

var timestamp = 1489227764;
var currentMoment = moment.unix(timestamp);
console.log(currentMoment.format('MMM D, YY'));

//January 3rd,2016 @ 12:13 AM
console.log(currentMoment.format('MMMM Do,YYYY @ hh:mm A'));
