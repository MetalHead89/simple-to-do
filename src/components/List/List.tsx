import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ListSlice } from '../../store/reducers/ListSlice';
import BottomPanel from './BottomPanel/BottomPanel';
import Item from './Item/Item';
import './List.scss';

function List() {
  const { list } = useAppSelector((state) => state.listReducer);
  const { addItem } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const items = list.map((item) => <Item key={item.id} {...item} />);

  const itemsContainer =
    items.length > 0 ? (
      <>
        <ul className="list__items-container">
          {items}
          <BottomPanel />
        </ul>
      </>
    ) : null;

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target;

    if (event.key === 'Enter' && target instanceof HTMLInputElement) {
      dispatch(addItem(target.value));

      target.value = '';
    }
  };

  return (
    <div className="list">
      <input
        type="text"
        className="list__input"
        placeholder="Что нужно сделать?"
        onKeyDown={(event) => handleListKeyDown(event)}
      />
      {itemsContainer}
    </div>
  );
}

export default List;
