const gql = require("graphql-request");

const query = `{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }`;

gql.request("https://api.graph.cool/simple/v1/movies", query).then(data =>
  console.log(data)
);
