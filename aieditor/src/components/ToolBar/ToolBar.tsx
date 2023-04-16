import './ToolBar.less';
import { Range } from '../../../../core/selection';
import { ToolBarData } from '../../types/editorType';

interface ToolBarItemProps {
  activited: boolean;
  text: string;
  format: string;
  onClick?: (format: string) => void;
}

const activityColor = 'rgb(35, 131, 226)';
type ToolBarItemPartProps = Pick<ToolBarItemProps, 'activited' | 'onClick'>;

function CreateSampleItem(props: ToolBarItemProps) {
  const { activited, text, format, onClick } = props;
  const style = {
    color: activited ? activityColor : '',
  };

  const handleClick = () => {
    const quill = window.quill;
    if (activited) {
      quill.format(format, null);
    } else {
      quill.format(format, true);
    }
    if (onClick) onClick(format);
  };

  return (
    <div className="toolbar-item" onClick={handleClick}>
      <span className={format} style={style}>
        {text}
      </span>
    </div>
  );
}

function Bold(props: ToolBarItemPartProps) {
  const component = CreateSampleItem({
    ...props,
    text: 'B',
    format: 'bold',
  });

  return component;
}

function Italic(props: ToolBarItemPartProps) {
  const component = CreateSampleItem({
    ...props,
    text: 'i',
    format: 'italic',
  });

  return component;
}

function Underline(props: ToolBarItemPartProps) {
  const component = CreateSampleItem({
    ...props,
    text: 'U',
    format: 'underline',
  });

  return component;
}

function Strike(props: ToolBarItemPartProps) {
  const component = CreateSampleItem({
    ...props,
    text: 'S',
    format: 'strike',
  });

  return component;
}

export interface ToolBarProps {
  onClick?: (format: string) => void;
  datas: ToolBarData | null;
}

export default function ToolBar(props: ToolBarProps) {
  const { onClick, datas } = props;
  const quill = window.quill;
  const left = datas?.left || 0;
  const top = datas?.top || 0;
  let formats: Record<string, any> = {};
  if (datas?.isShow) {
    const range = quill.getSelection();
    if (range) {
      formats = quill.getFormat(range);
    }
    console.log('formats', formats);
  }

  const classNames = ['tool-bar-wrap'];
  classNames.push(datas?.isShow ? 'tool-bar-show' : 'tool-bar-hide');
  const className = classNames.join(' ');

  const styles = {
    left: `${left}px`,
    top: `${top}px`,
  };

  return (
    <div className={className} style={styles}>
      <Bold activited={formats.bold} onClick={onClick} />
      <Italic activited={formats.italic} onClick={onClick} />
      <Underline activited={formats.underline} onClick={onClick} />
      <Strike activited={formats.strike} onClick={onClick} />
    </div>
  );
}
