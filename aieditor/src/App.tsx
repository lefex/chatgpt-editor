import { useState } from 'react';
import LayoutHeader from './components/LayoutHeader/LayoutHeader';
import Editor from './components/Editor/Editor';
import AddDragView from './components/AddDragView/AddDragView';
import ToolBar from './components/ToolBar/ToolBar';
import { Range } from '../../core/selection';
import Emitter, { EmitterSource } from '../../core/emitter';
import { ToolBarData } from './types/editorType';

export default function App() {
  const [toolBarData, setToolBarData] = useState<ToolBarData | null>(null);

  const onSelectionChange = (
    range: Range,
    oldRange: Range,
    source: EmitterSource,
  ) => {
    if (range != null && range.length > 0 && source === Emitter.sources.USER) {
      const quill = window.quill;
      const lines = quill.getLines(range.index, range.length);
      if (lines.length === 1) {
        const bounds = quill.getBounds(range);
        if (bounds) {
          setToolBarData({
            left: bounds.left,
            top: bounds.top,
            isShow: true,
          });
        }
      } else {
        const lastLine = lines[lines.length - 1];
        const index = quill.getIndex(lastLine);
        const length = Math.min(
          lastLine.length() - 1,
          range.index + range.length - index,
        );
        const bounds = quill.getBounds(new Range(index, length));
        if (bounds) {
          setToolBarData({
            left: bounds.left,
            top: bounds.top,
            isShow: true,
          });
        }
      }
    } else if (range && range.length === 0) {
      setToolBarData({
        left: toolBarData?.left || 0,
        top: toolBarData?.top || 0,
        isShow: false,
      });
    }
  };

  const handleToolBarClick = (format: string) => {
    // TODO
  };

  return (
    <div className="app">
      <LayoutHeader />
      <Editor onSelectionChange={onSelectionChange} />
      <AddDragView />
      <ToolBar datas={toolBarData} onClick={handleToolBarClick} />
    </div>
  );
}
