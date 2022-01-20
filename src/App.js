
import { useState } from 'react';
import './App.scss';
import { useMediaQuery } from 'react-responsive';
import ChatContainer from './compoents/ChatContainer.js/ChatContainer';
import Header from './compoents/Header/Header';
import SideNav from './compoents/SideNav/SideNav';
import { ChatListData, User, messages } from './Context/chat';
import { ChatProvide } from './Context/ChatContext';


const App = () => {
const [selectedChat, setSecletedChat] = useState(ChatListData[0]);
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 650px)' })
  
  return (
    <div className="App">
       { !isTabletOrMobile && <SideNav/> }
      <div className={isTabletOrMobile ? 'App-Content App-Content-mobile': "App-Content"}>
      <ChatProvide value={{ChatListData, selectedChat, setSecletedChat, User, messages}}>
     { !isTabletOrMobile && <Header/> }
      <ChatContainer/>
      </ChatProvide>
      </div>
    </div>
  );
}

export default App;
