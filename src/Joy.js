import React, { useEffect, useState, useRef } from 'react';
import './Joy.css';
import Lottie from 'lottie-web';
import animationData1 from './sampling.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';


function Joy() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);

  useEffect(() => {
    let animData;
    switch (selectedOption) {
      case 'euphoric':
      case 'excited':
      case 'optimistic':
      case 'proud':
      case 'cheerful':
        case 'happy':
          case 'content':
            case 'peaceful':
        animData = animationData2;
        break;
        case 'jubilant':
          case 'elated':
          case 'zealous':
          case 'enthusiastic':
          case 'hopeful':
          case 'eager':
          case 'illustrous':
          case 'triumphant':
          case 'playful':
          case 'amused':
          case 'delighted':
          case 'jovial':
          case 'pleased':
          case 'satisfied':
          case 'serene':
          case 'tranquil':
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
      case 'euphoric':
        return (
          <div className="joy2-button-container">
            <button onClick={() => handleOptionSelect('jubilant')}className="joy-button">
            Jubilant
            </button>
            <button onClick={() => handleOptionSelect('elated')}className="joy-button">
              Elated
            </button>
          </div>
        );
        case 'excited':
            return (
              <div className="joy2-button-container">
                <button onClick={() => handleOptionSelect('zealous')}className="joy-button">
                  Zealous
                </button>
                <button onClick={() => handleOptionSelect('enthusiastic')}className="joy-button">
                  Enthusiastic
                </button>
              </div>
            );
      case 'optimistic':
        return (
          <div className="joy2-button-container">
            <button onClick={() => handleOptionSelect('hopeful')}className="joy-button">
              Hopeful
            </button>
            <button onClick={() => handleOptionSelect('eager')}className="joy-button">
            Eager
            </button>
          </div>
        );
        case 'proud':
        return (
          <div className="joy2-button-container">
            <button onClick={() => handleOptionSelect('illustrous')}className="joy-button">
             Illustrous
            </button>
            <button onClick={() => handleOptionSelect('triumphant')}className="joy-button">
            Triumphant
            </button>
          </div>
        );
        case 'cheerful':
        return (
          <div className="joy2-button-container">
            <button onClick={() => handleOptionSelect('playful')}className="joy-button">
            Playful
            </button>
            <button onClick={() => handleOptionSelect('amused')}className="joy-button">
            Amused
            </button>
          </div>
        );
        case 'happy':
        return (
          <div className="joy2-button-container">
            <button onClick={() => handleOptionSelect('delighted')}className="joy-button">
            Delighted
            </button>
            <button onClick={() => handleOptionSelect('jovial')}className="joy-button">
            Jovial
            </button>
          </div>
        );
        case 'content':
            return (
              <div className="joy2-button-container">
                <button onClick={() => handleOptionSelect('pleased')}className="joy-button">
                Pleased
                </button>
                <button onClick={() => handleOptionSelect('satisfied')}className="joy-button">
                Satisfied
                </button>
              </div>
            );
            case 'peaceful':
                return (
                  <div className="joy2-button-container">
                    <button onClick={() => handleOptionSelect('serene')}className="joy-button">
                    Serene
                    </button>
                    <button onClick={() => handleOptionSelect('tranquil')}className="joy-button">
                    Tranquil
                    </button>
                  </div>
                );
      case 'jubilant':
      case 'elated':
      case 'zealous':
      case 'enthusiastic':
      case 'hopeful':
      case 'eager':
      case 'illustrous':
      case 'triumphant':
      case 'playful':
      case 'amused':
      case 'delighted':
      case 'jovial':
      case 'pleased':
      case 'satisfied':
      case 'serene':
      case 'tranquil':
        return (
          <><div className="selected-option-container">
            <div className="selected-option">
              <h2>You have selected "{selectedOption}"</h2>
              <p>If you are feeling these specific emotions and you want to pursue finding out more about these specific emotions feel free to visit the following websites:</p>
              <ul>
              <li><a href="https://www.weforum.org/agenda/2023/03/joy-is-good-for-your-body-and-your-mind-three-ways-to-feel-it-more-often/">Click here!</a></li>
              <li><a href="https://www.healthline.com/health/affects-of-joy">Click here!</a></li>
              <li><a href="https://www.diffen.com/difference/Happiness_vs_Joy">Click here!</a></li>
              <li><a href="https://dictionary.apa.org/joy">Click here!</a></li>

            </ul>
            </div>
          </div><div className="text-box-container">
            <div className="text-box">
              <h2>General Information about Joy:</h2>
              <ul>
  <li>Joy is a positive emotion that is often described as a feeling of happiness, elation, or delight.</li>
  <li>It is typically triggered by positive experiences, such as achieving a goal, spending time with loved ones, or experiencing something beautiful.</li>
  <li>Joy is a complex emotion that involves both cognitive and physiological responses, such as increased heart rate, smiling, and feelings of warmth and pleasure.</li>
  <li>Research has shown that experiencing joy can have a range of benefits, including improved mood, enhanced creativity and problem-solving abilities, and increased resilience in the face of adversity.</li>
  <li>There are many ways to cultivate joy in daily life, such as practicing gratitude, spending time in nature, pursuing hobbies and interests, and engaging in acts of kindness and compassion.</li>
</ul>
              
            </div>
  
            </div></>
        );
      default:
        return (
          <div className="joy-button-container">
            <button onClick={() => handleOptionSelect('euphoric')}className="joy-button">
            Euphoric
            </button>
            <button onClick={() => handleOptionSelect('excited')}className="joy-button">
            Excited
            </button>
            <button onClick={() => handleOptionSelect('optimistic')}className="joy-button">
            Optimistic
            </button>
            <button onClick={() => handleOptionSelect('proud')}className="joy-button">
            Proud
            </button>
            <button onClick={() => handleOptionSelect('cheerful')}className="joy-button">
            Cheerful
            </button>
            <button onClick={() => handleOptionSelect('happy')}className="joy-button">
            Happy
            </button>
            <button onClick={() => handleOptionSelect('content')}className="joy-button">
            Content
            </button>
            <button onClick={() => handleOptionSelect('peaceful')}className="joy-button">
            Peaceful
            </button>
          </div>
        );
    }
  }

  return (
    <div>
      <div className='joy-header-container'>
      <h1>Joy</h1>
      {renderOptions()}
      {renderBackButton()}
      </div>
      <div className='animation-container'  ref={animationContainer}></div>
    </div>
  );
}

export default Joy;