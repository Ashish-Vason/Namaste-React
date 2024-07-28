import { addItem } from '../utils/appSlice';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';

const ItemListMenu = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="text-left ">
      {items.map((item) => (
        <div
          className="text-sm my-2 font-medium flex justify-between border-b-2 border-gray-300 p-3"
          key={item.card.info.id}
        >
          <div className="w-10/12">
            <div className="my-1">{item.card.info.name}</div>
            <p>
              ₹{' '}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <div className="text-gray-500 my-1">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-2/12 relative">
            <button
              className="bg-green-400 absolute bottom-0 left-8 px-3 rounded-sm"
              onClick={() => handleAddItems(item)}
            >
              Add
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListMenu;
