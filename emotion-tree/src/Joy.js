import React, { useEffect, useState, useRef } from 'react';
import './Joy.css';
import Lottie from 'lottie-web';
import animationData1 from './lottie.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';
import animationData4 from './test1.json';
import animationData5 from './75.json';
import animationData6 from './100.json';


function Joy() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);
  const loadingBarContainer = useRef(null);

  useEffect(() => {
    let animData;
    switch (selectedOption) {
      case 'scared':
      case 'terrified':
      case 'insecure':
      case 'nervous':
      case 'horrified':
        animData = animationData2;
        break;
      case 'frightened':
      case 'helpless':
      case 'panicked':
      case 'hysterical':
      case 'inferior':
      case 'inadequate':
      case 'worried':
      case 'anxious':
      case 'mortified':
      case 'dreadful':
        animData = animationData3;
        break;
      default:
        animData = animationData1;
        break;
    }
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay:true,
      animationData: animData,
    });

    return () => {
      anim.destroy();
    };
  },
  
  );

  useEffect(() => {
    let animData2;
    switch (selectedOption) {
      case 'scared':
      case 'terrified':
      case 'insecure':
      case 'nervous':
      case 'horrified':
        animData2 = animationData5;
        break;
      case 'frightened':
      case 'helpless':
      case 'panicked':
      case 'hysterical':
      case 'inferior':
      case 'inadequate':
      case 'worried':
      case 'anxious':
      case 'mortified':
      case 'dreadful':
        animData2 = animationData6;
        break;
      default:
        animData2 = animationData4;
        break;
    }
    const anim2 = Lottie.loadAnimation({
      container: loadingBarContainer.current,
      renderer: "svg",
      loop: true,
      autoplay:true,
      animationData: animData2,
    });

    return () => {
      anim2.destroy();
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
          <div className="selected-option-container">
            <div className='selected-option'>
            <h2>You have selected "{selectedOption}"</h2>
            <p>This is the end of the road, there's no more choices from here.</p>
            <p>Here's some random text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lorem a purus elementum faucibus sed a purus. Nam sagittis consectetur lacus id cursus. Praesent aliquam eu odio sed euismod. Aliquam eleifend felis et sapien porttitor, quis faucibus felis aliquam. Nullam feugiat euismod ante. Sed venenatis lectus ut massa euismod, vel aliquet mi ultrices. Aliquam at aliquam magna. Morbi sagittis velit in mauris laoreet hendrerit. Nunc id augue nibh. Nulla facilisi. Sed eget congue massa. Integer vitae mi vel nunc rhoncus venenatis eget ut lacus.</p>
            </div>
          </div>
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
      <h1>Joy</h1>
      {renderOptions()}
      {renderBackButton()}
      <div className='animation-container'  ref={animationContainer}></div>
    <div className='loadingBar-container' ref={loadingBarContainer}></div>
    </div>
  );
}

export default Joy;