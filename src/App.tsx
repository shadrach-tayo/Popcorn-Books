import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Book from './screens/Book';
import Discover from './screens/Discover';
import NotFound from './screens/NotFound';
import ReadingList from './screens/ReadingList';
import './App.css';

function App() {
  return (
   <div className='grid grid-cols-layout-sm sm:grid-cols-layout w-full mx-auto max-w-840'>
     <div className='relative'>
       <Nav />
     </div>
     <main className='w-full'>
      <AppRoutes />
     </main>
   </div>
  );
}

function AppRoutes () {
  return <Routes>
      <Route path='/discover' element={<Discover />} />
      <Route path='/book/:bookId' element={<Book />} />
      <Route path='/list' element={<ReadingList />} />
      <Route path='*' element={<NotFound />} />
      {/* <Route path='/' element={<Discover />} /> */}
    </Routes>
}

export default App;
