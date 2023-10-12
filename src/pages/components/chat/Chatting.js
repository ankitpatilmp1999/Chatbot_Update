import { CloseOutlined, PieChartFilled, SendOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

const App = () => {
  const [openchat, setOpenChat] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

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

    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hii') || lowerCaseInput.includes('hey') || lowerCaseInput.includes('hi')) {
      return 'Hi there!';
    } else if (lowerCaseInput.includes('how are you')) {
      return 'I am fine, thank you. How can I help you?';
    } else if (lowerCaseInput.includes('goodbye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'I do not understand your message. Please ask something else.';
    }
  };



  return (
    <>
      <div>

        <button onClick={() => setOpenChat(!openchat)} className='bg-[#c9c2c2] w-[90px] h-[90px] flex items-center justify-center rounded-[46px] float-right mr-5 mt-0 mt-[475px]'>
          <img className='h-[65px] w-[75px] m-2 ' src='\images\chatbotlogo.png' />
        </button>

        {openchat && (
          <div className='bg-white h-[565px] w-[385px] float-right rounded-[20px] shadow-[0px_0px_10px_0px_#959595] mr-2'>
           
            


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

            


            <div className='h-[430px] bg-[#eaeef3]'>
              <div className='custom-chat-content' style={{ overflow: "auto" }}>
                {chatMessages.map((message, index) => (
                  <div key={index} className={`custom-${message.type}`}>
                    {message.text}
                  </div>
                ))}
              </div>
            </div>

            


            <div className='h-[55px] bg-[#f9f9f9] rounded-[0px_0px_20px_20px]'>
              <form onSubmit={sendMessage} className='flex'>
                <input type='text' value={userInput} onChange={handleUserInput} placeholder='Type Your Message Here' className=' w-[90%] h-[35px] p-4 border-solid border-[black] outline-none' />
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

export default App