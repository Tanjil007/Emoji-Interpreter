import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😀": "Grinning Face",
    "🤣": "Rolling on the Floor Laughing",
    "🙂": "Slightly Smiling Face",
    "😂": "Face with Tears of Joy",
    "🤩": "Star-Struck",
    "😍": "Smiling Face with Heart-Eyes",
    "😡": "Pouting Face"
  };
  const weKnowEmojis = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, We don't have this emoji in our database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out!!!!</h1>
      <input onChange={emojiInputHandler} type="text" />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      <h2>
        {weKnowEmojis.map((emoji) => {
          return (
            <span
              onClick={() => {
                emojiClickHandler(emoji);
              }}
              key={emoji}
              style={{
                margin: "0.5rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
