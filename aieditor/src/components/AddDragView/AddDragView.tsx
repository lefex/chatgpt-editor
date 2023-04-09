import './AddDragView.less';
import addIcon from '../../../assets/add.svg';
import dragIcon from '../../../assets/drag.svg';

export default function AddDragView() {
  return (
    <div className="add-drag-view">
      <button className="btn add-btn">
        <img src={addIcon} className="icon"></img>
      </button>
      <button className="btn drag-btn">
        <img src={dragIcon} className="icon"></img>
      </button>
    </div>
  );
}
