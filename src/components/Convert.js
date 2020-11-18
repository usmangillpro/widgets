import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [bouncedText, setBouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setBouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranlslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: bouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranlslate();
  }, [language, bouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
