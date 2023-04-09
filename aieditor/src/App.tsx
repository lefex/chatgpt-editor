import { useState } from 'react';
import LayoutHeader from './components/LayoutHeader/LayoutHeader';
import Editor from './components/Editor/Editor';
import AddDragView from './components/AddDragView/AddDragView';
import ToolBar from './components/ToolBar/ToolBar';
import { Range } from '../../core/selection';
import Emitter, { EmitterSource } from '../../core/emitter';

export default function App() {
  const [toolbarisShow, setToolbarisShow] = useState(false);
  const quill = window.quill;

  const onSelectionChange = (
    range: Range,
    oldRange: Range,
    source: EmitterSource,
  ) => {
    console.log('onSelectionChange', range, oldRange, source);
    if (!range) {
      setToolbarisShow(false);
      return;
    }

    if (range && range.length > 0) {
      setToolbarisShow(true);
    } else if (range && range.length === 0) {
      setToolbarisShow(false);
    }
  };

  return (
    <div className="app">
      <LayoutHeader />
      <Editor onSelectionChange={onSelectionChange} />
      <AddDragView />
      <ToolBar isShow={toolbarisShow} />
    </div>
  );
}
