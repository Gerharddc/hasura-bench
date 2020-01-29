const request = require("graphql-request").request;
const express = require("express");
const app = express();
const port = 3000;

const query = `
  query TestQuery {
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

  let ran = 0;
  for (let j = 0; j < process.env.COUNT / 100; j++) {
    const arr = [];

    for (let i = 0; i < 100; i++) {
      const res = await request(process.env.URL, query);
      arr.push(res);
      ran++;
    }

    await Promise.all(arr);
  }

  endTime = new Date();

  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  return timeDiff / ran;
}

app.get("/", async (req, res) => {
  res.send("RPM: " + (await run()));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
