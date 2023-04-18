import React, { useState } from "react";
import Joy from "./Joy";
import Anger from "./Anger";
import Sadness from "./Sadness";
import Fear from "./Fear";
import Love from "./Love";
import Surprise from "./Surprise";

const Emotions = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("");

  const handleEmotionChange = (event) => {
    setSelectedEmotion(event.target.value);
  };

  return (
    <div>
      <h1>Emotions</h1>
      <div>
        <label>
          <input
            type="radio"
            name="emotion"
            value="joy"
            checked={selectedEmotion === "joy"}
            onChange={handleEmotionChange}
          />
          Joy
        </label>
      </div>
      {selectedEmotion === "joy" && <Joy />}

      <div>
        <label>
          <input
            type="radio"
            name="emotion"
            value="anger"
            checked={selectedEmotion === "anger"}
            onChange={handleEmotionChange}
          />
          Anger
        </label>
      </div>
      {selectedEmotion === "anger" && <Anger />}

      <div>
        <label>
          <input
            type="radio"
            name="emotion"
            value="sadness"
            checked={selectedEmotion === "sadness"}
            onChange={handleEmotionChange}
          />
          Sadness
        </label>
      </div>
      {selectedEmotion === "sadness" && <Sadness />}

      <div>
        <label>
          <input
            type="radio"
            name="emotion"
            value="fear"
            checked={selectedEmotion === "fear"}
            onChange={handleEmotionChange}
          />
          Fear
        </label>
      </div>
      {selectedEmotion === "fear" && <Fear />}

      <div>
        <label>
          <input
            type="radio"
            name="emotion"
            value="love"
            checked={selectedEmotion === "love"}
            onChange={handleEmotionChange}
          />
          Disgust
        </label>
      </div>
      {selectedEmotion === "love" && <Love />}
      
      <div>
        <label>
          <input
            type="radio"
            name="emotion"
            value="surprise"
            checked={selectedEmotion === "surprise"}
            onChange={handleEmotionChange}
          />
          Surprise
        </label>
      </div>
      {selectedEmotion === "surprise" && <Surprise />}
    </div>

    
  );
};

export default Emotions;





