import React, { useState } from "react";

// Function to simulate fetching real-time data (mocked in this case)
const fetchStockPrice = (stockSymbol: string): string => {
  // Mock response (this could be an actual API call)
  return `The current price of ${stockSymbol} is $150.00.`;
};

const JiaChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Function to simulate a bot response based on user input
  const generateBotResponse = (userInput: string): string => {
    const lowerCaseInput = userInput.toLowerCase();

    // Simulating responses based on common financial keywords
    if (lowerCaseInput.includes("stock") || lowerCaseInput.includes("market")) {
      return "Stocks are securities that represent ownership in a corporation. The stock market is a platform where buyers and sellers trade shares of publicly held companies.";
    }
    if (lowerCaseInput.includes("interest rate")) {
      return "Interest rates represent the cost of borrowing money or the return on investment for savings. They are set by central banks like the Federal Reserve.";
    }
    if (lowerCaseInput.includes("loan")) {
      return "A loan is a sum of money that is borrowed and is expected to be paid back with interest. Common types of loans include mortgages, student loans, and personal loans.";
    }
    if (lowerCaseInput.includes("credit score")) {
      return "A credit score is a numerical representation of a person's creditworthiness, ranging from 300 to 850. Higher scores indicate better credit health.";
    }
    if (lowerCaseInput.includes("inflation")) {
      return "Inflation is the rate at which the general level of prices for goods and services rises, causing purchasing power to fall.";
    }
    if (lowerCaseInput.includes("budget") || lowerCaseInput.includes("saving")) {
      return "Budgeting is the process of creating a plan to spend your money. It helps track expenses and ensures that you are saving for future goals.";
    }
    if (lowerCaseInput.includes("retirement")) {
      return "Retirement planning involves saving and investing money for the period when you stop working. Popular retirement plans include 401(k)s and IRAs.";
    }
    if (lowerCaseInput.includes("stock price")) {
      const stockSymbol = userInput.split(" ")[userInput.split(" ").length - 1].toUpperCase();
      return fetchStockPrice(stockSymbol);  // Fetch stock price based on user input
    }

    // Default response if no match found
    return "Sorry, I don't quite understand that. Could you rephrase your question or ask about something else related to finance?";
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message to chat
      const newMessages = [...messages, { sender: "user", content: input }];
      setMessages(newMessages);
      setInput("");

      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = { sender: "bot", content: generateBotResponse(input) };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000); // Simulating bot response delay
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" aria-label="Jia Chatbot">
      {/* Chatbox */}
      {isOpen && (
        <div className="bg-white w-64 h-80 shadow-lg rounded-lg flex flex-col p-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-lg font-bold text-gray-800">Jia</h2>
            <button
              onClick={toggleChat}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close Chatbox"
            >
              ✖
            </button>
          </div>
          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-2">
            {messages.length === 0 ? (
              <p className="text-gray-600 text-sm italic">Hi there! How can I assist you with your financial queries?</p>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                  <p
                    className={`text-sm ${
                      message.sender === "user" ? "bg-blue-100 text-blue-900 p-2 rounded-lg inline-block" : "bg-gray-100 text-gray-900 p-2 rounded-lg inline-block"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))
            )}
          </div>
          {/* Chat Input */}
          <div className="mt-2 flex">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your financial question..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2"
              aria-label="Send Message"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open Jia Chatbot"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default JiaChatbot;
