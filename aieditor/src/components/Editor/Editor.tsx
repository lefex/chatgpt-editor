import Quill from '../../../../quill';
import './Editor.less';
import { getBlockDelta } from '../../mock/block';

export default function Editor() {
  const createEditor = () => {
    const rootEl = document.querySelector('.editor') as HTMLElement;
    if (rootEl) {
      const quill = new Quill(rootEl, {
        theme: '',
      });
      const delta = getBlockDelta();
      quill.setContents(delta);
      window.quill = quill;
    }
  };

  return (
    <div className="main-editor-wrap" ref={createEditor}>
      <div className="editor"></div>
    </div>
  );
}
