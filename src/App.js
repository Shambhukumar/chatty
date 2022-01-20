
import { useState } from 'react';
import './App.scss';
import ChatContainer from './compoents/ChatContainer.js/ChatContainer';
import Header from './compoents/Header/Header';
import SideNav from './compoents/SideNav/SideNav';
import { ChatListData } from './Context/chat';
import { ChatProvide } from './Context/ChatContext';


const App = () => {
const [selectedChat, setSecletedChat] = useState(ChatListData[0]);
  
  return (
    <div className="App">
      <SideNav/>
      <div className='App-Content'>
      <ChatProvide value={{ChatListData, selectedChat, setSecletedChat}}>
      <Header/>
      <ChatContainer/>
      </ChatProvide>
      </div>
    </div>
  );
}

export default App;
