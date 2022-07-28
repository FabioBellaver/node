const express = require("express");
const app = express();
app.use(express.json());

app.get("/solutions", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Solution 1", "Solution 2", "Solution 3"]);
});

app.post("/solutions", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json([
    "Solution 1",
    "Solution 2",
    "Solution 3",
    "Solution 4",
  ]);
});

app.put("/solutions/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json([
    "Solution 5",
    "Solution 2",
    "Solution 3",
    "Solution 4",
  ]);
});

app.patch("/solutions/:id", (request, response) => {
  return response.json([
    "Solution 5",
    "Solution 7",
    "Solution 3",
    "Solution 4",
  ]);
});

app.delete("/solutions/:id", (request, response) => {
  return response.json(["Solution 5", "Solution 7", "Solution 4"]);
});

app.listen(3333);
