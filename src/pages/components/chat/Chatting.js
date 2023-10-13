import { CloseOutlined, PieChartFilled, SendOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

const Chatting = () => {
  const [openchat, setOpenChat] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    const userMessage = {
      text: userInput,
      type: 'user',
    };

    const chatResponse = {
      text: getChatbotResponse(userInput),
      type: 'chatbot',
    };

    setChatMessages([...chatMessages, userMessage, chatResponse]);
    setUserInput('');
  };

  const getChatbotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    switch (true) {
      case (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hii') || lowerCaseInput.includes('hey') || lowerCaseInput.includes('hi')):
        return 'Hi there!';
      case lowerCaseInput.includes('how are you'):
        return 'I am fine, thank you. How can I help you?';
      case lowerCaseInput.includes('goodbye'):
        return 'Goodbye! Have a great day!';
      case (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hii') ||  lowerCaseInput.includes('hi')):
      
      case (lowerCaseInput.includes('tell me a joke') || lowerCaseInput.includes('joke')):
        return "Why don't scientists trust atoms? Because they make up everything!";
      case (lowerCaseInput.includes("what's the weather today?") || lowerCaseInput.includes('weather')):
        return 'I am not able to provide real-time weather information.';
      case lowerCaseInput.includes('who won the last World Series?'):
        return 'I do not have access to real-time sports results.';
      case lowerCaseInput.includes('how\'s your day going?'):
        return 'It\'s going well, thank you. What can I do for you?';
      case lowerCaseInput.includes('what\'s up?'):
        return 'Not much, just here to chat with you!';
      case lowerCaseInput.includes('what can you do?'):
        return 'I can answer questions, tell jokes, or just chat with you. What would you like?';
      case lowerCaseInput.includes('tell me a fun fact'):
        return 'Sure, did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.';
      case lowerCaseInput.includes('how\'s life treating you?'):
        return "I'm just a computer program, so I don't experience life, but I'm here to assist you!";
      case lowerCaseInput.includes('what\'s your favorite book or movie?'):
        return "I don't have preferences, but I can recommend some great books and movies if you'd like.";
      case lowerCaseInput.includes('what\'s your favorite color?'):
        return "I don't have a favorite color, but I can help you with color-related information!";
      case lowerCaseInput.includes('tell me a riddle'):
        return 'Sure, here\'s one: I’m not alive, but I can grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?';
      case lowerCaseInput.includes('what\'s your favorite food?'):
        return "I don't eat, but I can help you find some great recipes!";
      case lowerCaseInput.includes('what\'s your favorite place in the world?'):
        return "I don't have a favorite place, but I can tell you about some amazing travel destinations.";
      case lowerCaseInput.includes('what\'s your favorite animal?'):
        return "I don't have a favorite animal, but I can share interesting facts about various animals.";
      case lowerCaseInput.includes('do you enjoy gardening?'):
        return "I'm not capable of gardening, but I can provide gardening tips and advice.";
      case lowerCaseInput.includes('how do you handle conflicts?'):
        return "I don't experience conflicts, but I can provide tips on conflict resolution.";
      case lowerCaseInput.includes('what\'s your favorite type of architecture?'):
        return "I don't have architectural preferences, but I can discuss different architectural styles.";
      case lowerCaseInput.includes('tell me about your favorite scientist or inventor.'):
        return "I don't have favorites, but I can tell you about influential scientists and inventors.";
      case lowerCaseInput.includes('do you enjoy outdoor activities?'):
        return "I don't have the capacity for outdoor activities, but I can suggest outdoor hobbies.";
      case lowerCaseInput.includes('what\'s your favorite way to give back to the community?'):
        return "I don't have preferences, but I can share ways to get involved in community service.";
      case lowerCaseInput.includes('share a unique fact about yourself.'):
        return "I'm a machine learning model created by OpenAI, designed to assist with information and tasks.";
      case lowerCaseInput.includes('how do you like to celebrate achievements?'):
        return "I don't celebrate, but I can help you plan celebrations or offer ideas for commemorating achievements.";
      case lowerCaseInput.includes('what\'s your favorite place to watch the sunset?'):
        return "I don't have personal preferences, but many people enjoy watching sunsets at the beach or in the mountains.";
      default:
        return 'I do not understand your message. Please ask something else.';
    }
  };



  return (
    <>
      <div>

        <button onClick={() => setOpenChat(!openchat)} className='fixed left-[1325px] top-[675px] bg-[#c9c2c2] w-[90px] h-[90px] flex items-center justify-center rounded-[46px]'>
          <img className='h-[65px] w-[75px] m-2 ' src='\images\chatbotlogo.png' />
        </button>

        {openchat && (
          <div className='bg-white h-[565px] w-[385px] rounded-[20px] shadow-[0px_0px_10px_0px_#959595] absolute top-[205px] left-[1032px]'>
            <div className='flex justify-between'>
              <div className='h-[80px] flex items-center'>
                <img className='h-[55px] w-[55px] m-5 ' src='\images\chatbotlogo.png' />
                <div>
                  <p className='text-lg font-mono'>ChatBot</p>
                  <p className='text-[12px] text-[#959595] font-bold'><PieChartFilled className='text-green-500' />Online</p>
                </div>
              </div>
              <div className='m-4'>
                <button onClick={() => setOpenChat(false)} ><CloseOutlined /></button>
              </div>
            </div>

            {/* <div className='h-[430px] bg-[#eaeef3]'>
              <div className='custom-chat-content' style={{ overflow: "auto" }}>
                {chatMessages.map((message, index) => (
                  <div key={index} className={`custom-${message.type}`}>
                    {message.text}
                  </div>
                ))}
              </div>
            </div> */}

            <div className="h-[430px] bg-[#eaeef3] overflow-auto">
              <div className="custom-chat-content" >
                {chatMessages.map((message, index) => (

                  <div
                    key={index}
                    className={`${message.type === 'user'
                      ? 'text-right pr-4'
                      : 'text-left pl-4'
                      }`}
                  >
                    <div
                      className={`${message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                        } rounded-lg p-2 inline-block my-2 mx-4`}
                    >
                      {/* {message.type === 'user' ? 'You: ' : 'ChatBot: '}{message.text} */}

                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            


            <div className='h-[55px] bg-[#f9f9f9] rounded-[0px_0px_20px_20px]'>
              <form onSubmit={sendMessage} className='flex'>
                <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Type Your Message Here' className=' w-[90%] h-[35px] p-4 border-solid border-[black] outline-none' />
                <button type='submit' className='bg-white flex items-center justify-center w-[10%]'>
                  <SendOutlined className='text-[blue] text-[20px]' />
                </button>
              </form>
              <div className='flex items-center justify-center'>
                <p className='text-[10px] text-[#959595] font-bold'>Powered by <a href='#' className='text-[#1b62fb]'>ChatBot</a></p>
              </div>
            </div>

            


          </div>
        )}
      </div>
    </>
  )
}

export default Chatting;


































































// import { CloseOutlined, PieChartFilled, SendOutlined } from '@ant-design/icons'
// import React, { useState } from 'react'

// const Chatting = () => {
//   const [openchat, setOpenChat] = useState(false);
//   const [userInput, setUserInput] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     const userMessage = {
//       text: userInput,
//       type: 'user',
//     };

//     const chatResponse = {
//       text: getChatbotResponse(userInput),
//       type: 'chatbot',
//     };

//     setChatMessages([...chatMessages, userMessage, chatResponse]);
//     setUserInput('');
//   };

//   const getChatbotResponse = (userInput) => {
//     const lowerCaseInput = userInput.toLowerCase();

//     switch (true) {
//       case (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hii') || lowerCaseInput.includes('hey') || lowerCaseInput.includes('hi')):
//         return 'Hi there!';
//       case lowerCaseInput.includes('how are you'):
//         return 'I am fine, thank you. How can I help you?';
//       case lowerCaseInput.includes('goodbye'):
//         return 'Goodbye! Have a great day!';
//       case lowerCaseInput.includes('tell me a joke'):
//         return "Why don't scientists trust atoms? Because they make up everything!";
//       case lowerCaseInput.includes("what's the weather today?"):
//         return 'I am not able to provide real-time weather information.';
//       case lowerCaseInput.includes('who won the last World Series?'):
//         return 'I do not have access to real-time sports results.';
//       case lowerCaseInput.includes('how\'s your day going?'):
//         return 'It\'s going well, thank you. What can I do for you?';
//       case lowerCaseInput.includes('what\'s up?'):
//         return 'Not much, just here to chat with you!';
//       case lowerCaseInput.includes('what can you do?'):
//         return 'I can answer questions, tell jokes, or just chat with you. What would you like?';
//       case lowerCaseInput.includes('tell me a fun fact'):
//         return 'Sure, did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.';
//       case lowerCaseInput.includes('how\'s life treating you?'):
//         return "I'm just a computer program, so I don't experience life, but I'm here to assist you!";
//       case lowerCaseInput.includes('what\'s your favorite book or movie?'):
//         return "I don't have preferences, but I can recommend some great books and movies if you'd like.";
//       case lowerCaseInput.includes('what\'s your favorite color?'):
//         return "I don't have a favorite color, but I can help you with color-related information!";
//       case lowerCaseInput.includes('tell me a riddle'):
//         return 'Sure, here\'s one: I’m not alive, but I can grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?';
//       case lowerCaseInput.includes('what\'s your favorite food?'):
//         return "I don't eat, but I can help you find some great recipes!";
//       case lowerCaseInput.includes('what\'s your favorite place in the world?'):
//         return "I don't have a favorite place, but I can tell you about some amazing travel destinations.";
//       case lowerCaseInput.includes('what\'s your favorite animal?'):
//         return "I don't have a favorite animal, but I can share interesting facts about various animals.";
//       case lowerCaseInput.includes('do you enjoy gardening?'):
//         return "I'm not capable of gardening, but I can provide gardening tips and advice.";
//       case lowerCaseInput.includes('how do you handle conflicts?'):
//         return "I don't experience conflicts, but I can provide tips on conflict resolution.";
//       case lowerCaseInput.includes('what\'s your favorite type of architecture?'):
//         return "I don't have architectural preferences, but I can discuss different architectural styles.";
//       case lowerCaseInput.includes('tell me about your favorite scientist or inventor.'):
//         return "I don't have favorites, but I can tell you about influential scientists and inventors.";
//       case lowerCaseInput.includes('do you enjoy outdoor activities?'):
//         return "I don't have the capacity for outdoor activities, but I can suggest outdoor hobbies.";
//       case lowerCaseInput.includes('what\'s your favorite way to give back to the community?'):
//         return "I don't have preferences, but I can share ways to get involved in community service.";
//       case lowerCaseInput.includes('share a unique fact about yourself.'):
//         return "I'm a machine learning model created by OpenAI, designed to assist with information and tasks.";
//       case lowerCaseInput.includes('how do you like to celebrate achievements?'):
//         return "I don't celebrate, but I can help you plan celebrations or offer ideas for commemorating achievements.";
//       case lowerCaseInput.includes('what\'s your favorite place to watch the sunset?'):
//         return "I don't have personal preferences, but many people enjoy watching sunsets at the beach or in the mountains.";
//       default:
//         return 'I do not understand your message. Please ask something else.';
//     }
//   };



//   return (
//     <>
//       <div>

//         <button onClick={() => setOpenChat(!openchat)} className='fixed left-[1325px] top-[675px] bg-[#c9c2c2] w-[90px] h-[90px] flex items-center justify-center rounded-[46px]'>
//           <img className='h-[65px] w-[75px] m-2 ' src='\images\chatbotlogo.png' />
//         </button>

//         {openchat && (
//           <div className={`${openchat ? "block bottom-[10px] " : "bottom-[-100%] hidden "} bg-white h-[565px] w-[385px] rounded-[20px] shadow-[0px_0px_10px_0px_#959595] fixed transition-[2s]  right-[0px]`}>
//             <div className='flex justify-between'>
//               <div className='h-[80px] flex items-center'>
//                 <img className='h-[55px] w-[55px] m-5 ' src='\images\chatbotlogo.png' />
//                 <div>
//                   <p className='text-lg font-mono'>ChatBot</p>
//                   <p className='text-[12px] text-[#959595] font-bold'><PieChartFilled className='text-green-500' />Online</p>
//                 </div>
//               </div>
//               <div className='m-4'>
//                 <button onClick={() => setOpenChat(false)} ><CloseOutlined /></button>
//               </div>
//             </div>

//             {/* <div className='h-[430px] bg-[#eaeef3]'>
//               <div className='custom-chat-content' style={{ overflow: "auto" }}>
//                 {chatMessages.map((message, index) => (
//                   <div key={index} className={`custom-${message.type}`}>
//                     {message.text}
//                   </div>
//                 ))}
//               </div>
//             </div> */}

//             <div className="h-[430px] bg-[#eaeef3] overflow-auto">
//               <div className="custom-chat-content" >
//                 {chatMessages.map((message, index) => (

//                   <div
//                     key={index}
//                     className={`${message.type === 'user'
//                       ? 'text-right pr-4'
//                       : 'text-left pl-4'
//                       }`}
//                   >
//                     <div
//                       className={`${message.type === 'user'
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-gray-200'
//                         } rounded-lg p-2 inline-block my-2 mx-4`}
//                     >
//                       {/* {message.type === 'user' ? 'You: ' : 'ChatBot: '}{message.text} */}

//                       {message.text}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>


            


//             <div className='h-[55px] bg-[#f9f9f9] rounded-[0px_0px_20px_20px]'>
//               <form onSubmit={sendMessage} className='flex'>
//                 <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Type Your Message Here' className=' w-[90%] h-[35px] p-4 border-solid border-[black] outline-none' />
//                 <button type='submit' className='bg-white flex items-center justify-center w-[10%]'>
//                   <SendOutlined className='text-[blue] text-[20px]' />
//                 </button>
//               </form>
//               <div className='flex items-center justify-center'>
//                 <p className='text-[10px] text-[#959595] font-bold'>Powered by <a href='#' className='text-[#1b62fb]'>ChatBot</a></p>
//               </div>
//             </div>

            


//           </div>
//         )}
//       </div>
//     </>
//   )
// }

// export default Chatting;