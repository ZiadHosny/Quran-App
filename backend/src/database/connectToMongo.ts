import mongoose from 'mongoose';
import { getFromEnv } from '../utils/getFromEnv';
import {
  logErrMsg,
  logErrInfoMsg,
  logSuccessMsg,
} from '../utils/console/log';

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
