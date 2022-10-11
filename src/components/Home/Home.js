import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'



const Home = () => {
  const quizobj = useLoaderData();
  let quizs = quizobj.data;
  // console.log(quizs)
  const handleQuiz = (id) => {
    // console.log('clicked', id)
  }

  return (
    <div>
      <Banner></Banner>
      <p className='text-4xl text-center py-5 font-sans font-bold'>Lets see some quiz</p>
      <div className='topics py-5'>
        {
          quizs.map(quiz => <QuizTopic key={quiz.id} quiz={quiz} handleQuiz={handleQuiz} ></QuizTopic>)
        }
      </div>
    </div>
  );
};

export default Home;