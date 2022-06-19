import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import DiscoverPage from './screens/DiscoverPage';
import BookPage from './screens/BookPage';
import ReadingListPage from './screens/ReadingListPage';
import NotFoundPage from './screens/NotFoundPage';
import './App.css';

function App() {
  return (
   <div className='grid grid-cols-layout-sm md:grid-cols-layout w-full mx-4 md:mx-auto max-w-840 mt-2 md:mt-10'>
     <div className='relative mb-5 md:mb-0 mx-5 md:mx-0'>
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
      <Route path='/discover' element={<DiscoverPage />} />
      <Route path='/books/:bookId' element={<BookPage />} />
      <Route path='/list' element={<ReadingListPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
}

export default App;
