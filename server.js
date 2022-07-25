const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

app.use(cors());

require('./config/conn');

app.use(express.json());
app.use('/api',require('./routers'));

dotenv.config({path: '.env'});
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));

