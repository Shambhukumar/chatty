
import './App.scss';
import ChatContainer from './compoents/ChatContainer.js/ChatContainer';
import Header from './compoents/Header/Header';
import SideNav from './compoents/SideNav/SideNav';
import { ChatListData } from './Context/chat';
import { ChatProvide } from './Context/ChatContext';



const App = () => {
  return (
    <div className="App">
      <SideNav/>
      <div className='App-Content'>
      <ChatProvide value={{ChatListData}}>
      <Header/>
      <ChatContainer/>
      </ChatProvide>
      </div>
    </div>
  );
}

export default App;
