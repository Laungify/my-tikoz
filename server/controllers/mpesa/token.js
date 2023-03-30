const axios = require("axios");
require("dotenv").config();

const createToken = async (req, res, next) => {
  const secret = process.env.MPESA_SECRET_KEY;
  const consumer = process.env.MPESA_CONSUMER_KEY;
  const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
  await axios
//   sandbox is for dev mode
// api is for production
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((response) => {
      token = response.data.access_token;
      console.log(response.data);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};

const stkPush = async (req, res) => {
  const shortCode = 174379;
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;
  const passkey = process.env.MPESA_PASSKEY;
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  );
  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    // for paybill "TransactionType": "CustomerPayBillOnline",
    TransactionType: "CustomerBuyGoodsOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortCode,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://mydomain.com/pat",
    AccountReference: `254${phone}`,
    TransactionDesc: "Test",
  };

  await axios
    .post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};

module.exports = { createToken, stkPush };
