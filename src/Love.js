import React, { useEffect, useState, useRef } from 'react';
import './Love.css';
import Lottie from 'lottie-web';
import animationData1 from './sampling.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';
function Love() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);

  useEffect(() => {
    let animData;
    switch (selectedOption) {
      case 'grateful':
      case 'sentimental':
      case 'affectionate':
      case 'romantic':
      case 'enchanted':
        animData = animationData2;
        break;
        case 'thankful':
          case 'appreciative':
          case 'nostalgic':
          case 'tender':
          case 'compassionate':
          case 'warmhearted':
          case 'enamored':
          case 'passionate':
          case 'rapturous':
          case 'enthrolled':
        animData = animationData3;
        break;
      default:
        animData = animationData1;
        break;
    }
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay:true,
      animationData: animData,
    });

    return () => {
      anim.destroy();
    };
  },
  
  );


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    };

    const handleBackButtonClick = () => {
        setSelectedOption('');
    };
  

const renderBackButton = () => {
    if (selectedOption !== ''){
        return (
            <button onClick={handleBackButtonClick}className="back-button">
            Back
            </button>
        );
    }
};

  const renderOptions = () => {
    switch (selectedOption) {
      case 'grateful':
        return (
          <div className="love2-button-container">
            <button onClick={() => handleOptionSelect('thankful')}className="love-button">
            Thankful
            </button>
            <button onClick={() => handleOptionSelect('appreciative')}className="love-button">
              Appreciative
            </button>
          </div>
        );
        case 'sentimental':
            return (
              <div className="love2-button-container">
                <button onClick={() => handleOptionSelect('nostalgic')}className="love-button">
                  Nostalgic
                </button>
                <button onClick={() => handleOptionSelect('tender')}className="love-button">
                  Tender
                </button>
              </div>
            );
      case 'affectionate':
        return (
          <div className="love2-button-container">
            <button onClick={() => handleOptionSelect('compassionate')}className="love-button">
              Compassionate
            </button>
            <button onClick={() => handleOptionSelect('warmhearted')}className="love-button">
            Warmhearted
            </button>
          </div>
        );
        case 'romantic':
        return (
          <div className="love2-button-container">
            <button onClick={() => handleOptionSelect('enamored')}className="love-button">
             Enamored
            </button>
            <button onClick={() => handleOptionSelect('passionate')}className="love-button">
            Passionate
            </button>
          </div>
        );
        case 'enchanted':
        return (
          <div className="love2-button-container">
            <button onClick={() => handleOptionSelect('rapturous')}className="love-button">
            Rapturous
            </button>
            <button onClick={() => handleOptionSelect('enthrolled')}className="love-button">
            Enthrolled
            </button>
          </div>
        );
      case 'thankful':
      case 'appreciative':
      case 'nostalgic':
      case 'tender':
      case 'compassionate':
      case 'warmhearted':
      case 'enamored':
      case 'passionate':
      case 'rapturous':
      case 'enthrolled':
        return (
          <><div className="selected-option-container">
            <div className="selected-option">
              <h2>You have selected "{selectedOption}"</h2>
              <p>If you are feeling these specific emotions and you want to pursue finding out more about these specific emotions feel free to visit the following websites:</p>
            <ul>
              <li><a href="https://www.goodtherapy.org/blog/psychpedia/love">Click here!</a></li>
              <li><a href="https://www.verywellmind.com/what-is-love-2795343">Click here!</a></li>
              <li><a href="https://psychcentral.com/relationships/the-psychology-of-love">Click here!</a></li>
              <li><a href="https://theconversation.com/what-is-love-139212">Click here!</a></li>

            </ul>
            </div>
            </div><div className="text-box-container">
            <div className="text-box">
            <h2>General Information about Love:</h2>
            <ul>
  <li>Love is a complex emotion that can take many forms, including romantic love, platonic love, and self-love.</li>
  <li>It is typically characterized by feelings of warmth, affection, and connection to another person, object, or idea.</li>
  <li>Love has both psychological and physiological effects on the body and brain, including the release of neurotransmitters such as oxytocin and dopamine.</li>
  <li>Experiencing love can have a positive impact on mental and physical health, including reducing stress and improving mood.</li>
  <li>There are many factors that can contribute to the experience of love, including personal experiences, cultural norms, and social expectations.</li>
  <li>Cultivating healthy and fulfilling relationships is an important aspect of experiencing and expressing love, and can involve communication, empathy, and respect.</li>
</ul>
            </div>
  
            </div></>
        );
      default:
        return (
          <div className="love-button-container">
            <button onClick={() => handleOptionSelect('grateful')}className="love-button">
            Grateful
            </button>
            <button onClick={() => handleOptionSelect('sentimental')}className="love-button">
            Sentimental
            </button>
            <button onClick={() => handleOptionSelect('affectionate')}className="love-button">
            Affectionate
            </button>
            <button onClick={() => handleOptionSelect('romantic')}className="love-button">
            Romantic
            </button>
            <button onClick={() => handleOptionSelect('enchanted')}className="love-button">
            Enchanted
            </button>
          </div>
        );
    }
  }

  return (
    <div>
      <div className='love-header-container'>
      <h1>Love</h1>
      {renderOptions()}
      {renderBackButton()}
      </div>
      <div className='animation-container'  ref={animationContainer}></div>
    </div>
  );
}

export default Love;