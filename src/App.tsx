import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Book from './screens/Book';
import Discover from './screens/Discover';
import NotFound from './screens/NotFound';
import ReadingList from './screens/ReadingList';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/discover' element={<Discover />} />
        <Route path='/book/:bookId' element={<Book />} />
        <Route path='/list' element={<ReadingList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
