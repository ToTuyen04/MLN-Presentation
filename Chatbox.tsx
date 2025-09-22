import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatboxProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbox: React.FC<ChatboxProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là trợ lý AI được train về "Lý luận nhận thức trong chủ nghĩa duy vật biện chứng". Bạn có câu hỏi gì về chủ đề này không?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Test API connectivity
  const testAPI = async () => {
    try {
      // Test với endpoint đơn giản hơn
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        console.error('API key not found in environment variables');
        return;
      }
      
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
      
      const testRequest = {
        contents: [{
          parts: [{
            text: "Hello"
          }]
        }]
      };

      console.log('Testing API with simple request...');
      const testResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testRequest)
      });
      
      console.log('Test Response Status:', testResponse.status);
      console.log('Test Response Headers:', Object.fromEntries(testResponse.headers.entries()));
      
      if (testResponse.ok) {
        const data = await testResponse.json();
        console.log('Test successful! Response:', data);
      } else {
        const errorText = await testResponse.text();
        console.error('Test failed! Error:', errorText);
      }
    } catch (error) {
      console.error('API Test Error:', error);
    }
  };

  useEffect(() => {
    testAPI(); // Test API when component mounts
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const presentationContext = `
  Bạn là một trợ lý AI chuyên về "Lý luận nhận thức trong chủ nghĩa duy vật biện chứng". 
  Hãy trả lời câu hỏi dựa trên kiến thức đã được train về chủ đề này.
  Trả lời bằng tiếng Việt, rõ ràng và dễ hiểu.
  `;

  const callGoogleAI = async (userMessage: string): Promise<string> => {
    try {
      console.log('Đang gọi Google AI với câu hỏi:', userMessage);
      
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
      
      const requestBody = {
        contents: [{
          parts: [{
            text: `${presentationContext}\n\nCâu hỏi: ${userMessage}`
          }]
        }],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      };

      console.log('Request URL:', url);
      console.log('Request Body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.error('Cấu trúc response không đúng:', data);
        throw new Error('Cấu trúc phản hồi từ AI không đúng định dạng');
      }
    } catch (error) {
      console.error('Lỗi khi gọi Google AI:', error);
      
      // Chỉ trả về thông báo lỗi đơn giản
      if (error instanceof Error) {
        if (error.message.includes('HTTP error! status: 400')) {
          return 'Có lỗi với yêu cầu API. Vui lòng kiểm tra lại câu hỏi và thử lại.';
        } else if (error.message.includes('HTTP error! status: 403')) {
          return 'API key không hợp lệ hoặc đã hết quota. Vui lòng liên hệ admin.';
        } else if (error.message.includes('HTTP error! status: 429')) {
          return 'Quá nhiều yêu cầu. Vui lòng đợi một chút rồi thử lại.';
        }
      }
      
      return 'Không thể kết nối với AI. Vui lòng kiểm tra kết nối internet và thử lại.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const aiResponse = await callGoogleAI(userMessage.text);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chatbox Toggle Button */}
      <button
        className={`chatbox-toggle ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
        aria-label="Toggle chatbox"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chatbox Container */}
      <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbox-header">
          <div className="chatbox-title">
            <div className="chatbox-avatar">🤖</div>
            <div>
              <h3>Trợ lý AI - Lý luận nhận thức</h3>
              <p>Đang hoạt động</p>
            </div>
          </div>
          <button className="chatbox-close" onClick={onToggle}>
            ✕
          </button>
        </div>

        <div className="chatbox-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isUser ? 'user' : 'ai'}`}
            >
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="message ai">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbox-input">
          <div className="input-container">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Hỏi về lý luận nhận thức..."
              disabled={isLoading}
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="send-button"
            >
              {isLoading ? '⏳' : '➤'}
            </button>
          </div>
          
          {/* Debug button */}
          <button
            onClick={testAPI}
            style={{
              marginTop: '8px',
              padding: '4px 8px',
              fontSize: '12px',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Test API (Check Console)
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbox;