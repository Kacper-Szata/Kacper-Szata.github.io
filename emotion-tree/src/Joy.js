import React, { useState } from 'react';
import './Joy.css';


function Joy() {
  const [selectedOption, setSelectedOption] = useState('');

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
          <div>
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
              <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
              <div>
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
                  <div>
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
          <div>
            <div className='selected-option'>
            <h2>You have selected "{selectedOption}"</h2>
            <p>This is the end of the road, there's no more choices from here.</p>
            <p>Here's some random text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lorem a purus elementum faucibus sed a purus. Nam sagittis consectetur lacus id cursus. Praesent aliquam eu odio sed euismod. Aliquam eleifend felis et sapien porttitor, quis faucibus felis aliquam. Nullam feugiat euismod ante. Sed venenatis lectus ut massa euismod, vel aliquet mi ultrices. Aliquam at aliquam magna. Morbi sagittis velit in mauris laoreet hendrerit. Nunc id augue nibh. Nulla facilisi. Sed eget congue massa. Integer vitae mi vel nunc rhoncus venenatis eget ut lacus.</p>
            </div>
          </div>
        );
      default:
        return (
          <div>
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
    </div>
  );
}

export default Joy;