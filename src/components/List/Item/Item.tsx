import { useAppDispatch } from '../../../store/hooks';
import { ListSlice } from '../../../store/reducers/ListSlice';
import './Item.scss';

function Item({
  id,
  text,
  isComplete,
}: {
  id: number;
  text: string;
  isComplete: boolean;
}) {
  const { changeItemState } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const handleItemClick = (id: number) => {
    dispatch(changeItemState(id));
  };

  const itemClasses = isComplete ? 'item item_completed' : 'item';

  return (
    <li className={itemClasses} key={id}>
      <span className="item__text" onClick={() => handleItemClick(id)}>
        {text}
      </span>
      <button className="item__deleteButton"></button>
    </li>
  );
}

export default Item;
