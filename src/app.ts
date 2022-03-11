import express from 'express';
import {createAnonymousJwtToken} from './utils/token';

const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post('/api/v1/create-auth-token', async (req, res) => {
  try {
      const token = await createAnonymousJwtToken();
    res.status(200).send({
      status: 200,
      data: {
        token,
      }
    })
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: 400,
      err: 'Token generation Failed'
    })
  }
})

app.listen(port, () => {
  return console.log(`Mining Monitor Authenticator is listening at port ${port}`);
});
