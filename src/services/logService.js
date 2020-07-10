//const Raven = require("raven-js");

//import Raven from "raven-js";

function init() {
  /* Raven.config(
    "https://0941cab473bf4f07a83251bfe05a054b@o417122.ingest.sentry.io/5315383",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install(); */
}

function log(error) {
  console.error(error);

  //Raven.captureException(error);
}

export default {
  init,
  log,
};
