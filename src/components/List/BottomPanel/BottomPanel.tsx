import './BottomPanel.scss';
import GetDeclension from '../../../utils/GetDeclension';

function BottomPanel({
  backlogsCount,
  isClearButton,
}: {
  backlogsCount: number;
  isClearButton: boolean;
}) {
  const DECLENSION_CASES: [string, string, string] = ['дело', 'дела', 'дел'];
  const clearButton = isClearButton ? (
    <button className="bottomPanel__clearButton">Удалить выполненное</button>
  ) : null;

  return (
    <div className="bottomPanel">
      <span className="bottomPanel__itemsCounter">
        {`Осталось ${backlogsCount} ${GetDeclension(
          backlogsCount,
          DECLENSION_CASES
        )}`}
      </span>
      {clearButton}
    </div>
  );
}

export default BottomPanel;
