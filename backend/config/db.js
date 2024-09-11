// /config/db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1); 
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then((con) => {
        console.log('MongoDB connected to host'+con.connection.host);
        
    })
};

module.exports = connectDB;
