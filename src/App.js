import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  " 🏇 ": "Horse-riding",
  "🏋️‍♀️": "weight Lifting",
  "🤾": "Basketball",
  " 🏌️‍♀️ ": "Golf",
  "🏊‍♂️": "Swimming",
  " 🚵‍♂️ ":"Mountain-biking",
  "🤼‍♀️": "Wrestling",
  "🤸": "Gymnastics",
  " 🏂 ": "Skateboarding"
     
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); 
  const [meaning, setMeaning] = useState("click the emoji");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <body>
    <div className="App">
      <h1>Guess the sport?</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3 className="meaning"> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {""}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
    </body>
  );
}
