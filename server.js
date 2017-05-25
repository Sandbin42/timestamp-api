var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({ unix: null, natural: null })
})


app.get('/:date', function (req, res) {
   
  var newDate = null;
  
  if(!/\D/g.test(req.params.date) && !/-/g.test(req.params.date)) {
    newDate = new Date(req.params.date * 1000)
    res.json({ unix: newDate.getTime()/1000, natural: formatMonth(newDate) + " " + newDate.getDate() + ", " + newDate.getFullYear() })
  }
  else {
    newDate = new Date(req.params.date)
    
    if(formatMonth(newDate) && !/^-/.test(req.params.date))
      res.json({ unix: newDate.getTime()/1000, natural: formatMonth(newDate) + " " + newDate.getDate() + ", " + newDate.getFullYear() })
    else  
      res.json({ unix: null, natural: null })
  }

})


app.listen(8080, function () {
  console.log('Timestamp listening on port 8080!')
})


function formatMonth (date) {
  switch(date.getMonth()) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
  return null;
}