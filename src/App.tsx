import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import DiscoverPage from './screens/DiscoverPage';
import BookPage from './screens/BookPage';
import ReadingListPage from './screens/ReadingListPage';
import NotFoundPage from './screens/NotFoundPage';
import './App.css';

function App() {
  return (
   <div className='grid grid-cols-layout-sm sm:grid-cols-layout w-full mx-auto max-w-840 mt-10'>
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
      <Route path='/discover' element={<DiscoverPage />} />
      <Route path='/book/:bookId' element={<BookPage />} />
      <Route path='/list' element={<ReadingListPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
}

export default App;
