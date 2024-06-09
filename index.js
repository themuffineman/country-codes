const csv = require("csvtojson/v2");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin:'*'
}))

const PORT = 8080
app.listen(PORT, ()=>{console.log('Server up and running')})

app.get('/csvtojson', async (_, res) =>{
  const csvFilePath ='./countryList.csv'
  const jsonArray = await csv().fromFile(csvFilePath);
  res.json(jsonArray);
}