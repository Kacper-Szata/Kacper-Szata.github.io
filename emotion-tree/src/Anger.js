import React, { useEffect, useState, useRef } from 'react';
import './Anger.css';
import Lottie from 'lottie-web';
import animationData1 from './lottie.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';
import animationData4 from './test1.json';
import animationData5 from './75.json';
import animationData6 from './100.json';

function Anger() {
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
      case 'enraged':
        return (
          <div className="anger2-button-container">
            <button onClick={() => handleOptionSelect('hateful')} className="anger-button">
            Hateful
            </button>
            <button onClick={() => handleOptionSelect('hostile')}className="anger-button">
              Hostile
            </button>
          </div>
        );
        case 'exasperated':
            return (
              <div className="anger2-button-container">
                <button onClick={() => handleOptionSelect('agitated')}className="anger-button">
                  Agitated
                </button>
                <button onClick={() => handleOptionSelect('frustrated')}className="anger-button">
                  Frustrated
                </button>
              </div>
            );
      case 'irritable':
        return (
          <div className="anger2-button-container">
            <button onClick={() => handleOptionSelect('annoyed')}className="anger-button">
              Annoyed
            </button>
            <button onClick={() => handleOptionSelect('aggravated')}className="anger-button">
            Aggravated
            </button>
          </div>
        );
        case 'jealous':
        return (
          <div className="anger2-button-container">
            <button onClick={() => handleOptionSelect('resentful')}className="anger-button">
             Resentful
            </button>
            <button onClick={() => handleOptionSelect('envious')}className="anger-button">
            Envious
            </button>
          </div>
        );
        case 'disgusted':
        return (
          <div className="anger2-button-container">
            <button onClick={() => handleOptionSelect('contemptuous')}className="anger-button">
            Contemptuous
            </button>
            <button onClick={() => handleOptionSelect('revolted')}className="anger-button">
            Revolted
            </button>
          </div>
        );
      case 'hateful':
      case 'hostile':
      case 'agitated':
      case 'frustrated':
      case 'annoyed':
      case 'aggravated':
      case 'resentful':
      case 'envious':
      case 'contemptuous':
      case 'revolted':
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
          <div className="anger-button-container">
            <button onClick={() => handleOptionSelect('enraged')}className="anger-button">
              Enraged
            </button>
            <button onClick={() => handleOptionSelect('exasperated')}className="anger-button">
              Exasperated
            </button>
            <button onClick={() => handleOptionSelect('irritable')}className="anger-button">
            Irritable
            </button>
            <button onClick={() => handleOptionSelect('jealous')}className="anger-button">
            Jealous
            </button>
            <button onClick={() => handleOptionSelect('disgusted')}className="anger-button">
            Disgusted
            </button>
          </div>
        );
    }
  }

  return (
    <div>
      <h1>Anger</h1>
      {renderOptions()}
      {renderBackButton()}
      <div className='animation-container'  ref={animationContainer}></div>
    <div className='loadingBar-container' ref={loadingBarContainer}></div>
    </div>
  );
}

export default Anger;