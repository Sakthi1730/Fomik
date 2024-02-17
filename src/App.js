import './sb-admin-2.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Book from './Book';
import { Routes ,BrowserRouter, Route} from 'react-router-dom';
import BookList from './BookList';
import Dashboard from './Dashboard';
import BookEdit from './BookEdit';

function App() {
  return (
    <>
      
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/BookList" element={<BookList/>} />
              <Route path="/BookList/:id" element={<BookEdit/>} />
              
          </Routes>
       
          </BrowserRouter>

         
    </>
  );
}

export default App;
