import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import lessons from '../../lessons';

const Lesson = () => {
  const { code } = lessons[1];
  return (
    <div className="h-screen bg-gray-500">
      <CodeMirror
        className=""
        value={code}
        height="20vh"
        theme={abcdef}
        extensions={[javascript({ jsx: true })]}
      />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl">
          Which of the following lines of code will put "Canis Major" at the
          beginning of the array constellations?
        </h1>
        <div className="flex gap-4 mt-10">
          <button className=" bg-slate-900 border-4 p-2 border-cyan-700 text-white hover:scale-105">
            constellations.insert("Canis Major");
          </button>
          <button className=" bg-slate-900 border-4 p-2 border-cyan-700 text-white hover:scale-105">
            constellations.unshift("Canis Major");
          </button>
          <button className=" bg-slate-900 border-4 p-2 border-cyan-700 text-white hover:scale-105">
            constellations.addToBeginning("Canis Major");
          </button>
          <button className=" bg-slate-900 border-4 p-2 border-cyan-700 text-white hover:scale-105">
            constellations.pop("Canis Major");
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
