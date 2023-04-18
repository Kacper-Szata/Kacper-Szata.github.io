import React, { useState } from 'react';
import './Sadness.css';

function Sadness() {
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
      case 'gloomy':
        return (
          <div>
            <button onClick={() => handleOptionSelect('hopeless')}className="sadness-button">
            Hopeless
            </button>
            <button onClick={() => handleOptionSelect('depressed')}className="sadness-button">
              Depressed
            </button>
          </div>
        );
        case 'hurt':
            return (
              <div>
                <button onClick={() => handleOptionSelect('agonized')}className="sadness-button">
                  Agonized
                </button>
                <button onClick={() => handleOptionSelect('disturbed')}className="sadness-button">
                  Disturbed
                </button>
              </div>
            );
      case 'unhappy':
        return (
          <div>
            <button onClick={() => handleOptionSelect('miserable')}className="sadness-button">
              Miserable
            </button>
            <button onClick={() => handleOptionSelect('disheartened')}className="sadness-button">
            Disheartened
            </button>
          </div>
        );
        case 'disappointed':
        return (
          <div>
            <button onClick={() => handleOptionSelect('dismayed')}className="sadness-button">
             Dismayed
            </button>
            <button onClick={() => handleOptionSelect('displeased')}className="sadness-button">
            Displeased
            </button>
          </div>
        );
        case 'shameful':
        return (
          <div>
            <button onClick={() => handleOptionSelect('regretful')}className="sadness-button">
            Regretful
            </button>
            <button onClick={() => handleOptionSelect('guilty')}className="sadness-button">
            Guilty
            </button>
          </div>
        );
        case 'lonely':
        return (
          <div>
            <button onClick={() => handleOptionSelect('isolated')}className="sadness-button">
            Isolated
            </button>
            <button onClick={() => handleOptionSelect('neglected')}className="sadness-button">
            Neglected
            </button>
          </div>
        );
      case 'hopeless':
      case 'depressed':
      case 'agonized':
      case 'disturbed':
      case 'miserable':
      case 'disheartened':
      case 'dismayed':
      case 'displeased':
      case 'regretful':
      case 'guilty':
      case 'isolated':
      case 'neglected':
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
            <button onClick={() => handleOptionSelect('gloomy')}className="sadness-button">
            Gloomy
            </button>
            <button onClick={() => handleOptionSelect('hurt')}className="sadness-button">
            Hurt
            </button>
            <button onClick={() => handleOptionSelect('unhappy')}className="sadness-button">
            Unhappy
            </button>
            <button onClick={() => handleOptionSelect('disappointed')}className="sadness-button">
            Disappointed
            </button>
            <button onClick={() => handleOptionSelect('shameful')}className="sadness-button">
            Shameful
            </button>
            <button onClick={() => handleOptionSelect('lonely')}className="sadness-button">
            Lonely
            </button>
          </div>
        );
    }
  }

  return (
    <div>
      <h1>Sadness</h1>
      {renderOptions()}
      {renderBackButton()}
    </div>
  );
}

export default Sadness;