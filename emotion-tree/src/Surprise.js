import React, { useState } from 'react';
import './Surprise.css';
function Surprise() {
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
      case 'moved':
        return (
          <div>
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
              <div>
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
          <div>
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
          <div>
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
          <div>
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
    </div>
  );
}

export default Surprise;
