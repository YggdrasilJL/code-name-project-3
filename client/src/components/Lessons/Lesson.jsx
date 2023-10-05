import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LESSON_VALIDATE } from "../../../utils/mutations";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import lessons from '../../lessons';

const Lesson = () => {
  const { code } = lessons[0];

  const [ getCode, setCode ] = useState(code);
  const [ getIsCorrect, setIsCorrect ] = useState(false)

  const [validateAnswer, { data, loading, error }] = useMutation(LESSON_VALIDATE)

  const submitHandler = async () => {
    let answerData = {
      userID: 'bSFbFSnSRn4y35u357uu',
      lessonID: '346o24ythik24jybi',
      lessonAnswerData: getCode
    }
    try {
      await validateAnswer(answerData)
    } catch {
      console.log(err)
    }
    
    if (data.statusCode == 200) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }

    return isCorrect 
      ? <p>You are correct!</p> 
      : <p>You are incorrect!</p> 
    
    
  }

  const isCorrect = getIsCorrect

  return (
    <div>
      <CodeMirror
        value={getCode}
        height="500px"
        theme={abcdef}
        extensions={[javascript({ jsx: true })]}
        onChange={ (value) => setCode(value) }
      />
      <button
        className=" bg-slate-500 border-4 p-2 border-red-950 text-white"
        onClick={submitHandler}
      >
        submit
      </button>
      
    </div>
  );
};

export default Lesson;
