import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ListSlice } from '../../store/reducers/ListSlice';
import './List.scss';

function List() {
  const { list } = useAppSelector((state) => state.listReducer);
  const { addItem } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const items = list.map((item) => <li key={item.id}>{item.text}</li>);

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
      <ul>{items}</ul>
    </div>
  );
}

export default List;
