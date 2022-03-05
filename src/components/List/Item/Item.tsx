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
  const { changeItemState, deleteItem } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const handleItemClick = (id: number) => {
    dispatch(changeItemState(id));
  };

  const handleDeleteButtonClick = (id: number) => {
    dispatch(deleteItem(id));
  };

  const itemClasses = isComplete ? 'item item_completed' : 'item';

  return (
    <li className={itemClasses}>
      <span className="item__text" onClick={() => handleItemClick(id)}>
        {text}
      </span>
      <button
        className="item__deleteButton"
        onClick={() => handleDeleteButtonClick(id)}
      >
        close
      </button>
    </li>
  );
}

export default Item;
