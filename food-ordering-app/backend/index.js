const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51IxkSkSC2lQC5NcvyyV1Ktr0s3woco9TDj2IQmonzUV0xi6QHVzNJC3zmDRXQDLTVtW4HStZb8RxtPrKhfULdLS100i5pBNWBy'
);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

/*
app.post('/payment', async (req, res) => {
  try {
    const product = await stripe.products.create({
      name: 'T-Shirt',
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 100 * 100, // 100 INR
      currency: 'USD',
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      customer_email: 'demo@gmail.com',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}); 
*/

app.post('/create-checkout-session', async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: 'inr',
      product_data: {
        name: product.card.info.name,
        images: [
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
            product.card.info.imageId,
        ],
      },
      unit_amount: product.card.info.price
        ? product.card.info.price
        : product.card.info.defaultPrice,
    },
    quantity: 1,
  }));

  console.log(lineItems, 'linesss');
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'https://fresh-foodie.vercel.app/success',
    cancel_url: 'https://fresh-foodie.vercel.app/failure',
    customer_email: 'customer@example.com',
    billing_address_collection: 'required', // To collect billing address
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'IN'], // Specify the countries allowed
    },
  });

  res.json({
    id: session.id,
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
