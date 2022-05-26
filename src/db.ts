import mongoose from "mongoose";

const connectWithDataBase = (connectionString: string) => {
  return mongoose.connect(connectionString, {});
};

export { connectWithDataBase };
