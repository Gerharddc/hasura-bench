const request = require("graphql-request").request;
const express = require("express");
const app = express();
const port = 3000;

const query = `
  query Querrer {
    Test_aggregate {
        aggregate {
          avg {
            value
          }
          sum {
            value
          }
        }
      }
  }
`;

async function run() {
  startTime = new Date();
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const res = await request("http://hasura:8080/v1/graphql", query);
    arr.push(res);
  }
  await Promise.all(arr);
  endTime = new Date();

  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  return timeDiff;
}

app.get("/", async (req, res) => {
  res.send("Time: " + (await run()));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
