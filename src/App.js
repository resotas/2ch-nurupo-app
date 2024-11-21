import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
	if (!input.trim()) return;

	const newMessages = [
	  ...messages,
	  { user: "名無しさん＠ぬるぽ", text: input },
	];

	if (input.trim() === "ぬるぽ") {
	  newMessages.push({
		user: "AI＠ガッ職人",
		text: getRandomGah(),
	  });
	} else {
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
	  {/* 見出しとサブタイトル */}
	  <header className="header">
		<h1>ぬるぽガッアプリ</h1>
		<p>ぬるぽキボンヌ</p>
	  </header>

	  {/* メッセージログ */}
	  <div className="log">
		{messages.map((msg, index) => (
		  <div key={index} className="message">
			<span className="user">{msg.user}:</span>
			<pre className="text">{msg.text}</pre>
		  </div>
		))}
	  </div>

	  {/* 入力エリア */}
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