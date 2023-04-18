import React, { useEffect, useState, useRef } from 'react';
import './Fear.css';
import Lottie from 'lottie-web';
import animationData1 from './lottie.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';
import animationData4 from './test1.json';
import animationData5 from './75.json';
import animationData6 from './100.json';

function Fear() {
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
            <button onClick={handleBackButtonClick} className="back-button">
            Back
            </button>
        );
    }
};

const renderOptions = () => {
  switch (selectedOption) {
    case 'scared':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('frightened')} className="fear-button">
            Frightened
          </button>
          <button onClick={() => handleOptionSelect('helpless')}className="fear-button">
            Helpless
          </button>
        </div>
      );
    case 'insecure':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('inferior')}className="fear-button">
            Inferior
          </button>
          <button onClick={() => handleOptionSelect('inadequate')}className="fear-button">
            Inadequate
          </button>
        </div>
      );
    case 'terrified':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('panicked')}className="fear-button">
            Panicked
          </button>
          <button onClick={() => handleOptionSelect('hysterical')}className="fear-button">
            Hysterical
          </button>
        </div>
      );
    case 'nervous':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('worried')}className="fear-button">
            Worried
          </button>
          <button onClick={() => handleOptionSelect('anxious')}className="fear-button">
            Anxious
          </button>
        </div>
      );
    case 'horrified':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('mortified')}className="fear-button">
            Mortified
          </button>
          <button onClick={() => handleOptionSelect('dreadful')}className="fear-button">
            Dreadful
          </button>
        </div>
      );
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
      return (
        <div className="selected-option-container">
          <div className="selected-option">
            <h2>You have selected "{selectedOption}"</h2>
            <p>This is the end of the road, there's no more choices from here.</p>
            <p>Here's some random text:blah</p>
          </div>
        </div>
      );
      
    default:
      return (
        <div className="fear-button-container">
          <button onClick={() => handleOptionSelect('scared')}className="fear-button">
            Scared
          </button>
          <button onClick={() => handleOptionSelect('terrified')}className="fear-button">
            Terrified
          </button>
          <button onClick={() => handleOptionSelect('insecure')}className="fear-button">
            Insecure
          </button>
          <button onClick={() => handleOptionSelect('nervous')}className="fear-button">
            Nervous
          </button>
          <button onClick={() => handleOptionSelect('horrified')}className="fear-button">
            Horrified
          </button>
        </div>
      );
  }
}


  return (
    <div>
      <h1>Fear</h1>
      {renderOptions()}
      {renderBackButton()}
    <div className='animation-container'  ref={animationContainer}></div>
    <div className='loadingBar-container' ref={loadingBarContainer}></div>
    </div>
  );
}

export default Fear;