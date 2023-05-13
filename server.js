const express = require('express');
const cors = require('cors');
const sendOrder = require('./api/sendOrder');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/sendOrder', sendOrder);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
