import { useDispatch, useSelector } from 'react-redux';
import ItemListMenu from './ItemlistMenu';
import { clearCart } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_CLIENT_ID } from '../utils/constants';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const isLoggedIn = useSelector((store) => store.login.isLoggedIn);
  const [totalPrice, setTotalPrice] = useState(0);

  const makePayment = async () => {
    const stripe = await loadStripe(STRIPE_CLIENT_ID);

    const body = {
      products: cartItems,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(
      `https://namaste-react-50d9.onrender.com/create-checkout-session`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    console.log('sess', session);

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }

    //   const response = await fetch('http://localhost:3000/payment', {
    //     method: 'POST',
    //     body: cartItems
    //   });
    //   const json = await response.json();
    //   if (response.status === 200) {
    //     // window.location.href = response.url;
    //     window.location.href = json.url;
    //   }
    //   console.log(json);
  };

  useEffect(() => {
    if (cartItems) {
      const totalPrice = cartItems.reduce((total, item) => {
        const price =
          parseInt(item.card.info.price) ||
          parseInt(item.card.info.defaultPrice);
        return total + price;
      }, 0);
      setTotalPrice(totalPrice);
    }
  }, [cartItems]);
  return (
    <div>
      {isLoggedIn ? (
        <div className="m4 p-4 text-center">
          <div className="w-6/12 flex justify-between mx-auto">
            <h1 className="text-xl font-bold">Cart</h1>
            {cartItems.length != 0 && (
              <button
                className="bg-gray-500 text-white p-2"
                onClick={() => {
                  dispatch(clearCart());
                  setTotalPrice(0);
                }}
              >
                Clear Cart
              </button>
            )}
          </div>
          <div className="flex">
            <div className="justify-between ml-[20%] w-8/12">
              <ItemListMenu items={cartItems} />
            </div>
            {cartItems.length > 0 && (
              <div className="w-4/12">
                <h1 className="text-center">Checkout Items</h1>
                <div>
                  <p>items: {cartItems.length} </p>
                  <p>Price: {totalPrice / 100}</p>
                </div>
                <div className="mt-3">
                  <button
                    className="bg-green-600 py-1 px-4 text-white"
                    onClick={makePayment}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center my-5 text-2xl font-bold">
          Please Login First...
        </div>
      )}
    </div>
  );
};

export default Cart;
