import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiz_page from '../src/Pages/LearnHub Project/Quiz Page.jsx'
import TeacherQuizPage from '../src/Pages/Teachersquizpage.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

         {/*Learn Hub routes*/}
         <Route path='/' element={<TeacherQuizPage/>} />
         <Route path='/LearnHub/Quiz' element={<Quiz_page />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;


