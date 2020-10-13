const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoData = require('./mongoData.js');
const Pusher = require('pusher');

// app config
const app = express()
const port = process.env.PORT || 8002

const pusher = new Pusher({
  appId: '1089837',
  key: '87a6cf7034d1284a73ed',
  secret: '7ea1abc723a7c64bae7d',
  cluster: 'us3',
  encrypted: true
});

// middlewares
app.use(express.json())
app.use(cors())

// db config
const mongoURI = 'mongodb+srv://admin:r5hVkaidSw9SntxA@cluster0.d6j3w.mongodb.net/discordDB?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log('DB Connected')

  const changeStream = mongoose.connection.collection('conversations').watch()

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      pusher.trigger('channels', 'newChannel', {
        'change': change
      });
    } else if (change.operationType === 'update') {
      pusher.trigger('conversation', 'newMessage', {
        'change': change
      });
    } else {
      console.log('Error triggering Pusher')
    }
  })
})

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/new/channel', (req, res) => {
  const dbData = req.body

  mongoData.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/get/channellist', (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let channels = []

      data.map((channelData) => {
        const channelInfo = {
          id: channelData._id,
          name: channelData.channelName
        }
        channels.push(channelInfo);
      })

      res.status(200).send(channels);
    }
  })
});

app.post('/new/message', (req, res) => {
  const newMessage = req.body;

  mongoData.update(
    {
      _id: req.query.id
    },
    {
      $push: {
        conversation: req.body
      }
    },
    (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(201).send(data);
      }
    }
  )
});

app.get('/get/data', (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data);
    }
  })
});

app.get('/get/conversation', (req, res) => {
  const id = req.query.id;

  mongoData.find({ _id: id}, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data);
    }
  })
})

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));

