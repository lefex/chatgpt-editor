import './AddDragView.less';
import addIcon from '../../../assets/add.svg';
import dragIcon from '../../../assets/drag.svg';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

const addCode = () => {
  const quill = window.quill;
  const range = quill.getSelection();
  if (range) {
    quill.insertText(range.index, '\n', 'user');
    quill.formatLine(range.index + 1, 1, { 'code-block': true });
  } else {
    const length = quill.getLength();
    quill.insertText(length, '\n', 'user');
    quill.formatLine(length + 1, 1, { 'code-block': true });
  }
};

const onClick: MenuProps['onClick'] = item => {
  const { key } = item;
  switch (key) {
    case 'code':
      addCode();
      break;

    default:
      break;
  }
  console.log('onClick', key);
};

const items: MenuProps['items'] = [
  {
    key: 'Heading1',
    label: <span>大标题</span>,
  },
  {
    key: 'Heading2',
    label: <span>副标题</span>,
  },
  {
    key: 'Heading3',
    label: <span>标题一</span>,
  },
  {
    key: 'table',
    label: <span>表格</span>,
  },
  {
    key: 'blockquote',
    label: <span>引用</span>,
  },
  {
    key: 'code',
    label: <span>代码片段</span>,
  },
  {
    key: 'formula',
    label: <span>公式</span>,
  },
  {
    key: 'image',
    label: <span>图片</span>,
  },
  {
    key: 'video',
    label: <span>视频</span>,
  },
  {
    key: 'audio',
    label: <span>音频</span>,
  },
];

export default function AddDragView() {
  return (
    <div className="add-drag-view">
      <Dropdown menu={{ items, onClick }} arrow={false}>
        <button className="btn add-btn">
          <img src={addIcon} className="icon"></img>
        </button>
      </Dropdown>
      <button className="btn drag-btn">
        <img src={dragIcon} className="icon"></img>
      </button>
    </div>
  );
}
