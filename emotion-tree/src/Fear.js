import React, { useEffect, useState, useRef } from 'react';
import './Fear.css';
import Lottie from 'lottie-web';
import animationData1 from './lottie.json';

function Fear() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay:true,
      animationData: animationData1,
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
          <div>
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
              <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <div className='selected-option'>
            <h2>You have selected "{selectedOption}"</h2>
            <p>This is the end of the road, there's no more choices from here.</p>
            <p>Here's some random text:blah</p>
          </div>
          </div>
        );
      default:
        return (
          <div>
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
    <div className='animation-container' style={{height: "40%", width: "40%", margin:"auto"}}  ref={animationContainer}></div>
    </div>
  );
}

export default Fear;