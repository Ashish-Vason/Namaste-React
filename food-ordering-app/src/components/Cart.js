import { useDispatch, useSelector } from 'react-redux';
import ItemListMenu from './ItemlistMenu';
import { clearCart } from '../utils/appSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m4 p-4 text-center">
      <div className="w-6/12 flex justify-between mx-auto">
        <h1 className="text-xl font-bold">Cart</h1>
        {cartItems.length != 0 && (
          <button
            className="bg-gray-500 text-white p-2"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </div>
      <div className="w-6/12 mx-auto">
        <ItemListMenu items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
