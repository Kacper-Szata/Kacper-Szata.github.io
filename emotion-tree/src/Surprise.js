import React, { useEffect, useState, useRef } from 'react';
import './Surprise.css';
import Lottie from 'lottie-web';
import animationData1 from './lottie.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';
import animationData4 from './test1.json';
import animationData5 from './75.json';
import animationData6 from './100.json';

function Surprise() {
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
      case 'moved':
        return (
          <div className="surprise2-button-container">
            <button onClick={() => handleOptionSelect('touched')}className="surprise-button">
            Touched
            </button>
            <button onClick={() => handleOptionSelect('stimulated')}className="surprise-button">
              Stimulated
            </button>
          </div>
        );
        case 'overcome':
            return (
              <div className="surprise2-button-container">
                <button onClick={() => handleOptionSelect('astounded')}className="surprise-button">
                  Astounded
                </button>
                <button onClick={() => handleOptionSelect('speechless')}className="surprise-button">
                  Speechless
                </button>
              </div>
            );
      case 'amazed':
        return (
          <div className="surprise2-button-container">
            <button onClick={() => handleOptionSelect('awe-struck')}className="surprise-button">
              Awe-Struck
            </button>
            <button onClick={() => handleOptionSelect('astonished')}className="surprise-button">
            Astonished
            </button>
          </div>
        );
        case 'confused':
        return (
          <div className="surprise2-button-container">
            <button onClick={() => handleOptionSelect('disillusioned')}className="surprise-button">
             Disillusioned
            </button>
            <button onClick={() => handleOptionSelect('perplexed')}className="surprise-button">
            Perplexed
            </button>
          </div>
        );
        case 'stunned':
        return (
          <div className="surprise2-button-container">
            <button onClick={() => handleOptionSelect('shocked')}className="surprise-button">
            Shocked
            </button>
            <button onClick={() => handleOptionSelect('bewildered')}className="surprise-button">
            Bewildered
            </button>
          </div>
        );
      case 'touched':
      case 'stimulated':
      case 'astounded':
      case 'speechless':
      case 'awe-struck':
      case 'astonished':
      case 'disillusioned':
      case 'perplexed':
      case 'shocked':
      case 'bewildered':
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
            <button onClick={() => handleOptionSelect('moved')}className="surprise-button">
            Moved
            </button>
            <button onClick={() => handleOptionSelect('overcome')}className="surprise-button">
            Overcome
            </button>
            <button onClick={() => handleOptionSelect('amazed')}className="surprise-button">
            Amazed
            </button>
            <button onClick={() => handleOptionSelect('confused')}className="surprise-button">
            Confused
            </button>
            <button onClick={() => handleOptionSelect('stunned')}className="surprise-button">
            Stunned
            </button>
          </div>
        );
    }
  }

  return (
    <div>
      <h1>Surprise</h1>
      {renderOptions()}
      {renderBackButton()}
      <div className='animation-container'  ref={animationContainer}></div>
    <div className='loadingBar-container' ref={loadingBarContainer}></div>
    </div>
  );
}

export default Surprise;
