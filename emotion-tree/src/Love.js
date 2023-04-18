import React, { useState } from 'react';
import './Love.css';
function Love() {
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
      case 'grateful':
        return (
          <div>
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
              <div>
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
          <div>
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
          <div>
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
          <div>
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
    </div>
  );
}

export default Love;