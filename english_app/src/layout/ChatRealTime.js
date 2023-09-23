/** @format */

import * as React from "react";
import { Chat } from "@progress/kendo-react-conversational-ui";
const user = {
  id: 1,
  avatarUrl:
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg",
  avatarAltText: "KendoReact Conversational UI RICSU",
};
const bot = {
  id: 0,
};
const initialMessages = [
  {
    author: bot,
    suggestedActions: [
      {
        type: "reply",
        value: "Neat!",
      },
    ],
    timestamp: new Date(),
    text: "Hello, this is a demo bot. I don't do much, but I can count symbols!",
  },
];
export default function ChatRealTime() {
  const [messages, setMessages] = React.useState(initialMessages);
  const addNewMessage = (event) => {
    let botResponse = Object.assign({}, event.message);
    botResponse.text = countReplayLength(event.message.text);
    botResponse.author = bot;
    setMessages([...messages, event.message]);
    setTimeout(() => {
      setMessages((oldMessages) => [...oldMessages, botResponse]);
    }, 1000);
  };
  const countReplayLength = (question) => {
    let length = question.length;
    let answer = question + " contains exactly " + length + " symbols.";
    return answer;
  };
  return (
    <div>
      <Chat
        user={user}
        messages={messages}
        onMessageSend={addNewMessage}
        placeholder={"Type a message..."}
        width={400}
      />
    </div>
  );
}
