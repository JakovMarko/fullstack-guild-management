import mongoose from "mongoose";
import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";
import AffiliateStat from "../models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "../data/index.js";
export default async function ConnectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to: ${conn.connection.host}`);
    // await Transaction.insertMany(dataTransaction);
    // await OverallStat.insertMany(dataOverallStat);
    // await AffiliateStat.insertMany(dataAffiliateStat);
    // console.log("finished inserting!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
