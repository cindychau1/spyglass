
import client from 'prom-client';

// declare controller
const promController = {};

promController.getDefaultMetrics = async function (req, res, next) {
  client.collectDefaultMetrics();

  res.locals.clusterData = 'Wow look at all that data';
  return next();
}

// export controller
export default promController;