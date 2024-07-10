const { default: mongoose } = require("mongoose");

const connection = {};

// 连接到数据库
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log('db连接成功');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};