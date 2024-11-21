import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]); // 初期メッセージを空に設定

  const [input, setInput] = useState("");

  const handleSend = () => {
	if (!input.trim()) return;

	const newMessages = [
	  ...messages,
	  { user: "名無しさん＠ぬるぽ", text: input },
	];

	if (input.trim() === "ぬるぽ") {
	  // 「ぬるぽ」の場合
	  newMessages.push({
		user: "AI＠ガッ職人",
		text: getRandomGah(),
	  });
	} else {
	  // それ以外の場合
	  newMessages.push({
		user: "AI＠ガッ職人",
		text: getRandomResponse(),
	  });
	}

	setMessages(newMessages);
	setInput("");
  };

  const getRandomGah = () => {
	const aAs = [
	  "／￣￣￣＼\n（　ガッ　　）\n ＼＿＿＿／",
	  "∧＿∧\n（ ´Д｀） ガッ",
	  "( ﾟДﾟ)＜ガッ!",
	];
	return aAs[Math.floor(Math.random() * aAs.length)];
  };

  const getRandomResponse = () => {
	const responses = [
	  "半年ROMれ",
	  "逝ってよし",
	  `オマエモナー:\n  ∧＿∧\n（　´∀｀）＜オマエモナー\n（　　　　）\n｜ ｜　|\n（_＿）＿）`,
	];
	return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
	<div className="app">
	  <div className="log">
		{messages.map((msg, index) => (
		  <div key={index} className="message">
			<span className="user">{msg.user}:</span>
			<pre className="text">{msg.text}</pre>
		  </div>
		))}
	  </div>
	  <div className="input-container">
		<input
		  type="text"
		  value={input}
		  onChange={(e) => setInput(e.target.value)}
		  placeholder="メッセージを入力..."
		/>
		<button onClick={handleSend}>送信</button>
	  </div>
	</div>
  );
};

export default App;