import Quill from '../../../../quill';
import './Editor.less';
import { getBlockDelta } from '../../mock/block';
import { useEffect, useRef } from 'react';
import { EmitterSource } from '../../../../core/emitter';
import { Range } from '../../../../core/selection';

export interface EditorProps {
  onSelectionChange: (
    range: Range,
    oldRange: Range,
    source: EmitterSource,
  ) => void;
}

export default function Editor(props: EditorProps) {
  const { onSelectionChange } = props;
  const editorRef = useRef<HTMLDivElement>(null);

  const createEditor = () => {
    if (window.quill) {
      return;
    }
    const rootEl = editorRef.current;
    if (rootEl) {
      const quill = new Quill(rootEl, {
        theme: '',
      });
      quill.on('selection-change', (range, oldRange, source) => {
        onSelectionChange(range, oldRange, source);
      });
      quill.on('format-change', (format, value) => {
        console.log('format-change', format, value);
      });
      const delta = getBlockDelta();
      quill.setContents(delta);
      window.quill = quill;
    }
  };

  const addHoverEvent = () => {
    const rootEl = editorRef.current;
    if (rootEl) {
      rootEl.addEventListener(
        'mouseenter',
        event => {
          console.log('mouseenter', event.target);
        },
        false,
      );

      // This handler will be executed every time the cursor
      // is moved over a different list item
      rootEl.addEventListener(
        'mouseover',
        event => {
          // highlight the mouseover target
          console.log('mouseover', event.target, event);
        },
        false,
      );
    }
  };

  useEffect(() => {
    createEditor();
  });

  return (
    <div className="main-editor-wrap">
      <div className="editor" ref={editorRef}></div>
    </div>
  );
}
