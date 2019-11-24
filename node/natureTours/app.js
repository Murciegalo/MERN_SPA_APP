//express
const express = require('express');
const app = express();

app.get('/' , (req , res) => {
  res
    .status(200)
    .json({
      message: "Checking rootPage" ,
      app: 'NatureTours'
    })
});


const PORT = process.env.PORT || 3000; 
app.listen(PORT , () => {
  console.log('Server running..');
})

