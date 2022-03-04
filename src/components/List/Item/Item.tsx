import { useAppDispatch } from '../../../store/hooks';
import { ListSlice } from '../../../store/reducers/ListSlice';
import './Item.scss';

function Item({ id, text }: { id: number; text: string }) {
  const { changeItemState } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const handleItemClick = (id: number) => {
    dispatch(changeItemState(id));
  };

  return (
    <li className="item" key={id}>
      <span className="item__text" onClick={() => handleItemClick(id)}>
        {text}
      </span>
      <button className="item__deleteButton"></button>
    </li>
  );
}

export default Item;
