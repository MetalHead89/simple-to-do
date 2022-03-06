import './BottomPanel.scss';
import GetDeclension from '../../../utils/GetDeclension';

function BottomPanel({ backlogsCount }: { backlogsCount: number }) {
  const DECLENSION_CASES: [string, string, string] = ['дело', 'дела', 'дел'];

  return (
    <div className="bottomPanel">
      <span className="bottomPanel__itemsCounter">
        {`Осталось ${backlogsCount} ${GetDeclension(
          backlogsCount,
          DECLENSION_CASES
        )}`}
      </span>
      <div className="bottomPanel__filter">2</div>
      <button className="bottomPanel__clearButton"></button>
    </div>
  );
}

export default BottomPanel;
