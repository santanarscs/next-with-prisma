import { graphql } from "graphql";
import { objectType, makeSchema } from "@nexus/schema";
import path from "path";
const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.id("id");
    t.string("director");
    t.string("movieName");
    t.int("yearRelesead");
  },
});

export const schema = makeSchema({
  types: [Movie],
  outputs: {
    typegen: path.join(process.cwd(), "pages", "api", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "pages", "api", "schema.graphql"),
  },
});

export default async (req, res) => {
  const query = req.body.query;
  const variables = req.body.variables;
  const response = await graphql(schema, query, {}, {}, variables);
  return res.end(JSON.stringify(response));
};
