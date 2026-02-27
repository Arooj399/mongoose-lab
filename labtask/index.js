const connectDB = require('./config/db');
const controller = require('./controllers/studentController');

connectDB().then(() => {
  controller.allStudent(); 
});