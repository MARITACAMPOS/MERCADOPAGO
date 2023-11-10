import mercadopago from 'mercadopago'
export const createOrder = async (req, res) => {
  mercadopago.configure({
  access_token:
  "TEST-478033143722493-110616-d0b950f74ecf86e9b3d5ee2fe26d51c0-1534186672",
});

const result = await mercadopago.preferences.create({
  items: [
  {
          title: "Samsung A23", 
          unit_price: 500,
          currency_id: "CPL",
          quantity: 1,
  },
] ,
  back_urls: {

    success: "http://localhost:3000/success",
    failure: "http://localhost:3000/failure",
    pending: "http://localhost:3000/pending",

  },
  
  notification_url: "htpp://localhost:3000/webhook",
});

console.log(result)

res.send('result.body');
};

export const receiveWebhook = async(req, res) => {
  const payment =req.query;

  try {
  
    if(payment.type=="payment"){

      const data = await mercadopago.payment.findById(payment["data.id"]);

      console.log(data);
    }
    res.sendStatus(204);
  } catch(error){
    console.log(error);
    return res.sendStatus(500).jason({ error: error.message})
  }
  };