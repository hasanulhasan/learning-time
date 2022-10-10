import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'



const Home = () => {
  const quizobj = useLoaderData();
  let quizs = quizobj.data;
  return (
    <div>
      <Banner></Banner>
      <p className='text-4xl text-center py-5'>Lets see some quiz</p>
      <div className='topics py-5'>
        {
          quizs.map(quiz => <QuizTopic key={quiz.id} quiz={quiz} ></QuizTopic>)
        }
      </div>
    </div>
  );
};

export default Home;