import { createContext } from "react";

const ChatContext = createContext();
export const ChatProvide = ChatContext.Provider;

export default ChatContext;