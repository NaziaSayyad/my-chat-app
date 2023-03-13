
import './App.css';
import { Route } from 'react-router-dom';
import ChatPage from './Pages/Chat';
import Home from './Pages/Home';

function App() {
  return (
   <>
   <div>
    <Route path='/'   component={Home} exact />
    <Route path='/chat' component={ChatPage} />
   </div>
   </>
  );
}

export default App;
