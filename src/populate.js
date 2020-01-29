const request = require('graphql-request').request;

const query = `
  mutation Insert($num: Int!) {
    insert_Test(objects: { value: $num }) {
      returning {
        id
      }
    }
  }
`;

async function run() {
  for (let i = 0; i < 1000; i++) {
    const num = Math.floor(Math.random() * 1000);

    const res = await request("http://127.0.0.1:8080/v1/graphql", query, { num });
    console.log(res);
  }
}

run().catch(err => console.log("err", err));
