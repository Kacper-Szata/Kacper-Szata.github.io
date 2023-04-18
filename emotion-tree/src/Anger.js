import React, { useState } from 'react';
import './Anger.css';

function Anger() {
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
      case 'enraged':
        return (
          <div>
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
              <div>
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
          <div>
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
          <div>
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
          <div>
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
    </div>
  );
}

export default Anger;