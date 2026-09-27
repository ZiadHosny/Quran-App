import dns from 'dns';
import mongoose from 'mongoose';
import { getFromEnv } from '../utils/getFromEnv';
import {
  logErrMsg,
  logErrInfoMsg,
  logSuccessMsg,
} from '../utils/console/log';

// Node's built-in DNS resolver can get ECONNREFUSED on some Windows/router
// setups when resolving the mongodb+srv:// SRV record, even though the OS
// resolver works fine. Pointing Node at a public resolver avoids that.
dns.setServers(['8.8.8.8', '1.1.1.1']);

export const connectToMongoDb = async () => {
  const { databaseURL } = getFromEnv();

  try {
    await mongoose.connect(databaseURL);
    logSuccessMsg(`Connect To Mongo DB Successfully`);
  } catch (err) {
    logErrMsg('Error when connect to Mongo DB');
    logErrInfoMsg(err);
  }
};
