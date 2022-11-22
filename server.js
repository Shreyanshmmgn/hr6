const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// To count frequency of characters in string 
const countFrequency = (str, ch) => {
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      count++;
    }
  }
  return count;
}
app.listen(3001, () => {
  console.log('listening on port 3001');
});
app.post("/data", (req, res) => {

  const { str } = req.body;
  console.log('Body : ', req.body, str);

  frequency = []; // To store elements with their frequency 
  for (var i = 0; i < str.length; i++) {
    frequency[i] = [countFrequency(str, str[i]), str[i]];
    // Calculating each frequency 
  }

  frequency.sort().reverse() // Sort first based on frequency of characters in desc order

  let ans = "";

  frequency.sort(function (a, b) { //  if freq is same, then sort alphabetically in asc order.
    if (a[0] == b[0] && a[1] < b[1]) {
      return -1;
    }
    return 0;
  })

  for (let i = 0; i < frequency.length; i++) { // Making string again 
    ans += frequency[i][1];
  }
  console.log(ans);
  res.send({ result: ans });
});



