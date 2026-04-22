// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './Compo/Counter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Marksheet from './Compo/Marksheet';
import GetTextBoxValue from './Compo/GetTextBoxValue';
import JobForm from './Compo/JobForm';
import PizzaOrder from './Compo/PizzaOrder';
import Bill from './Compo/Bill';
import ArrayWorks from './Compo/ArrayWorks';
import Students from './Compo/Students';
import Quiz from './Compo/Quiz';
import QuizCard from './Compo/QuizCard';
import WordCount from './Compo/WordCount';
import ToDoList from './Compo/ToDoList';
import Alerts from './Compo/Alerts';
import UserInput from './Compo/UserInput';
import Employee from './Compo/Employee';
import DBForm from './Compo/DBForm';
// import Main from './Compo/Main';
import PrivacyPolicy from './Compo/PrivacyPolicy';


import Sidebar from './Compo/Sidebar';
import ReactTopicList from './Compo/ReactTopicList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="main-content-wrapper">
          <Routes>
            <Route element={<ReactTopicList />} path="" />
            <Route element={<Counter />} path="counter" />
            <Route element={<Marksheet />} path="mark" />
            <Route element={<GetTextBoxValue />} path="txt" />
            <Route element={<JobForm />} path="job" />
            <Route element={<PizzaOrder />} path="pizza" />
            <Route element={<Bill />} path="bill" />
            <Route element={<ArrayWorks />} path="arr" />
            <Route element={<Students />} path="stu" />
            <Route element={<Quiz />} path="quiz" />
            <Route element={<QuizCard />} path="quizcard" />
            <Route element={<WordCount />} path="wc" />
            <Route element={<ToDoList />} path="todo" />
            <Route element={<Alerts />} path="alert" />
            <Route element={<UserInput />} path="user" />
            <Route element={<Employee />} path="emp" />
            <Route element={<DBForm />} path="dbform" />
            <Route element={<PrivacyPolicy />} path="privacy" />
            <Route element={<ReactTopicList />} path="reacttopiclist" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
