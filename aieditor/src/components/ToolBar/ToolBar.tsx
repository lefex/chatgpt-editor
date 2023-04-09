import './ToolBar.less';
import { useState } from 'react';

interface ToolBarItemProps {
  activited: boolean;
  text: string;
  format: string;
}

const activityColor = 'rgb(35, 131, 226)';

function CreateSampleItem(props: ToolBarItemProps) {
  const { activited, text, format } = props;
  const style = {
    color: activited ? activityColor : '',
  };

  const handleClick = () => {
    const quill = window.quill;
    quill.format(format, !activited);
  };

  return (
    <div className="toolbar-item" onClick={handleClick}>
      <span className={format} style={style}>
        {text}
      </span>
    </div>
  );
}

function Bold(props: Partial<ToolBarItemProps>) {
  const { activited } = props;
  const component = CreateSampleItem({
    activited: activited || false,
    text: 'B',
    format: 'bold',
  });

  return component;
}

function Italic(props: Partial<ToolBarItemProps>) {
  const { activited } = props;
  const component = CreateSampleItem({
    activited: activited || false,
    text: 'i',
    format: 'italic',
  });

  return component;
}

function Underline(props: Partial<ToolBarItemProps>) {
  const { activited } = props;
  const component = CreateSampleItem({
    activited: activited || false,
    text: 'U',
    format: 'underline',
  });

  return component;
}

function Strike(props: Partial<ToolBarItemProps>) {
  const { activited } = props;
  const component = CreateSampleItem({
    activited: activited || false,
    text: 'S',
    format: 'strike',
  });

  return component;
}

export interface ToolBarProps {
  isShow: boolean;
}

export default function ToolBar(props: ToolBarProps) {
  const { isShow } = props;
  const quill = window.quill;
  const range = quill.getSelection();
  let left = 0;
  let top = 0;
  let formats: Record<string, any> = {};
  if (range) {
    const rect = quill.getBounds(range.index);
    console.log('rect', rect);
    if (rect) {
      left = rect.left;
      top = rect.top;
    }
    formats = quill.getFormat(range);
    console.log('formats', formats);
  }

  const classNames = ['tool-bar-wrap'];
  classNames.push(isShow ? 'tool-bar-show' : 'tool-bar-hide');
  const className = classNames.join(' ');

  const styles = {
    left: `${left}px`,
    top: `${top}px`,
  };

  return (
    <div className={className} style={styles}>
      <Bold activited={formats.bold} />
      <Italic activited={formats.italic} />
      <Underline activited={formats.underline} />
      <Strike activited={formats.strike} />
    </div>
  );
}
