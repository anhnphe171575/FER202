import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/homepage';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Home' element={<HomePage/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/News' element={<News data={newLists}/>} />
            <Route path='/Quizz' element={<Quizzez data1={quizData}/>} />
          </Routes>
        </BrowserRouter>
      );
}