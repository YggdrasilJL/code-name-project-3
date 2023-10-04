import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import lessons from '../../lessons';

const Lesson = () => {
  const { code } = lessons[0];
  return (
    <div>
      <CodeMirror
        value={code}
        height="500px"
        theme={abcdef}
        extensions={[javascript({ jsx: true })]}
      />
      <button
        className=" bg-slate-500 border-4 p-2 border-red-950 text-white"
        // onClick={}
      >
        submit
      </button>
    </div>
  );
};

export default Lesson;
