import { createServer } from "node:http";

// const server = createServer((req, res) => {});
export const server = createServer((request, response) => {
  // we can look at the request
  // console.log("request object", request);
  console.log("request.url: ", request.url);
  console.log("request.method: ", request.method);

  if (request.url === "/hello") {
    response.statusCode = 200;
    return response.end("Hello");
  } else if (request.url === "/bye") {
    response.statusCode = 200;
    return response.end("Byeeeeeee");
  }

  // 200 means good
  // 302 (redirecting)
  // 404 not found
  // 500or err
  // we can send back a response
  response.statusCode = 404;
  response.end("Not found");
});
