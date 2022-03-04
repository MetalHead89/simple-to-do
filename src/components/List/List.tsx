import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ListSlice } from '../../store/reducers/ListSlice';
import './List.scss';

function List() {
  const { list } = useAppSelector((state) => state.listReducer);
  const { addItem, changeItemState } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const items = list.map((item) => (
    <li className="list__item" key={item.id}>
      <span className="list__text" onClick={() => handleItemClick(item.id)}>
        {item.text}
      </span>
      <button className="list__deleteItemButton"></button>
    </li>
  ));

  const itemsContainer =
    items.length > 0 ? (
      <ul className="list__items-container">{items}</ul>
    ) : null;

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target;

    if (event.key === 'Enter' && target instanceof HTMLInputElement) {
      dispatch(addItem(target.value));

      target.value = '';
    }
  };

  const handleItemClick = (id: number) => {
    dispatch(changeItemState(id));
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
