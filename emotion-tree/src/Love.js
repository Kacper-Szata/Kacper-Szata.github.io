import React, { useEffect, useState, useRef } from 'react';
import './Love.css';
import Lottie from 'lottie-web';
import animationData1 from './lottie.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';
import animationData4 from './test1.json';
import animationData5 from './75.json';
import animationData6 from './100.json';
function Love() {
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
      <h1>Love</h1>
      {renderOptions()}
      {renderBackButton()}
      <div className='animation-container'  ref={animationContainer}></div>
      <div className='loadingBar-container' ref={loadingBarContainer}></div>
    </div>
  );
}

export default Love;