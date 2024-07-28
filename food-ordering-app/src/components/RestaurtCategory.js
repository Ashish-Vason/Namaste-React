import { useState } from 'react';
import ItemListMenu from './ItemlistMenu';

const RestaurantCategory = ({
  data,
  isAccOpen,
  setShowIndex,
  nullShowIndex,
}) => {
  const { itemCards } = data.card.card;
  //   const [isAccOpen, setIsAccOpen] = useState(false);
  const handleClick = (e) => {
    // console(index);
    console.log(setShowIndex);
    if (isAccOpen) {
      nullShowIndex();
    } else {
      setShowIndex();
    }
  };
  return (
    <div>
      {/* header */}
      <div className="p-4 bg-gray-200 w-6/12 mx-auto my-2 rounded-sm text-left shadow-lg">
        <div
          className="flex justify-between text-lg cursor-pointer"
          onClick={handleClick}
        >
          {data.card.card.title} ({itemCards.length})<div>↓</div>
        </div>
        {isAccOpen && <ItemListMenu items={itemCards} />}
      </div>

      {/* Descriptions */}
    </div>
  );
};

export default RestaurantCategory;
