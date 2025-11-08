const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(
  cors(
    {
      origin: [
        "https://5174-firebase-learning-docker-1762351433836.cluster-edb2jv34dnhjisxuq5m7l37ccy.cloudworkstations.dev/",
        "https://5173-firebase-learning-docker-1762351433836.cluster-edb2jv34dnhjisxuq5m7l37ccy.cloudworkstations.dev/",
        "https://3000-firebase-learning-docker-1762351433836.cluster-edb2jv34dnhjisxuq5m7l37ccy.cloudworkstations.dev/"
      ],
      credentials: true,
    }
  )
);




app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, this is the server side' });
});

PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0", () => {
  console.log(`http://localhost:${PORT}`);
});