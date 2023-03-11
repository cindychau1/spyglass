
import client from 'prom-client';
const promClient = client();
// declare controller
const promController = {};

promController.getDefaultMetrics = async function (req, res, next) {
  //declare variable to collectDefaultMetrics
  const collectedDefaultMetrics = client.collectDefaultMetrics;
  collectedDefaultMetrics();

  res.locals.clusterData = 'Wow look at all that data';
  return next();
}

// export controller
export default promController;