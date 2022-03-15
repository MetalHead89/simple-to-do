import './BottomPanel.scss';
import GetDeclension from '../../../utils/GetDeclension';
import { ListSlice } from '../../../store/reducers/ListSlice';
import { useAppDispatch } from '../../../store/hooks';

function BottomPanel({
  backlogsCount,
  isClearButton,
}: {
  backlogsCount: number;
  isClearButton: boolean;
}) {
  const { clearCompletedItems } = ListSlice.actions;
  const dispatch = useAppDispatch();

  const DECLENSION_CASES: [string, string, string] = ['дело', 'дела', 'дел'];

  return (
    <div className="bottomPanel">
      <span className="bottomPanel__itemsCounter">
        {`Осталось ${backlogsCount} ${GetDeclension(
          backlogsCount,
          DECLENSION_CASES
        )}`}
      </span>
      {isClearButton ? (
        <button
          className="bottomPanel__clearButton"
          onClick={() => dispatch(clearCompletedItems())}
        >
          Удалить выполненное
        </button>
      ) : null}
    </div>
  );
}

export default BottomPanel;
