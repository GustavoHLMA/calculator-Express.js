import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.urlencoded({ extended : true}));
app.use(express.json());



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let total = num1+num2;
  res.send("Result is " + total);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let result = (weight/(height*height))
  res.send("Your BMI is " + result)
});

app.listen("3000");