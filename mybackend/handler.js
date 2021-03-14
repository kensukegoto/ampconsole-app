'use strict';

const todos = [
  { id: 1, name: "This"}, { id: 2, name: "is from"}, { id: 3, name: "Serverless"}
];
module.exports.getTodos = async event => {

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials": "true"
    },
    body: JSON.stringify(todos)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
