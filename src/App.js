
import './App.scss';
import Chat from './compoents/Chat/Chat';
import ChatList from './compoents/ChatList/ChatList';
import Header from './compoents/Header/Header';
import SideNav from './compoents/SideNav/SideNav';

const App = () => {
  return (
    <div className="App">
      <SideNav/>
      <div className='App-Content'>
      <Header/>
      <ChatList/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
