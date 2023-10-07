import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LESSON_VALIDATE } from '../../../utils/mutations';
import { GET_LESSON } from '../../../utils/queries';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import lessons from '../../lessons';

const Lesson1 = () => {
  const { code } = lessons[0];

  const [getAnswer, setAnswer] = useState('');
  const [getIsCorrect, setIsCorrect] = useState(false);

  const [validateAnswer, { error }] =
    useMutation(LESSON_VALIDATE);

    
  const { loading, data } = useQuery(GET_LESSON, {
    variables: { id: '6520e3c402879e129ac56253'}
  });

  const lesson = data?.lesson
  //console.log(lesson)

  const submitHandler = async () => {
    const answer = getAnswer
    let answerData = {
      userID: '6520e3c302879e129ac5624d',
      // in the future supplied via context???
      lessonID: '6520e3c402879e129ac56253',
      body: 'test',
    };

    console.log(answerData)
    try {
      const data = await validateAnswer({
        variables: { answerData }
      });
      if (data.isValidated) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
  
      return isCorrect ? <p>You are correct!</p> : <p>You are incorrect!</p>;
    } catch (err) {
      console.log(err);
    }
  };

  const isCorrect = getIsCorrect;

  if (!loading) {return (
    <div>
      <h1>{lesson.question}</h1>
      <textarea onChange={setAnswer} defaultValue={'Enter here'}></textarea>
      <button
        className=" bg-slate-500 border-4 p-2 border-red-950 text-white"
        onClick={submitHandler}
      >
        submit
      </button>
    </div>
  )} else {
    return <h1>LOADING...</h1>
  }
};

export default Lesson1;
