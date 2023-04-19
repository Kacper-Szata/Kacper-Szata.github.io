import React, { useEffect, useState, useRef } from 'react';
import './Sadness.css';
import Lottie from 'lottie-web';
import animationData1 from './sampling.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';

function Sadness() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);
  
  useEffect(() => {
    let animData;
    switch (selectedOption) {
      case 'gloomy':
      case 'hurt':
      case 'unhappy':
      case 'disappointed':
      case 'shameful':
      case 'lonely':
        animData = animationData2;
        break;
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
        animData = animationData3;
        break;
      default:
        animData = animationData1;
        break;
    }
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay:true,
      animationData: animData,
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
          <div className="sadness2-button-container">
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
              <div className="sadness2-button-container">
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
          <div className="sadness2-button-container">
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
          <div className="sadness2-button-container">
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
          <div className="sadness2-button-container">
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
          <div className="sadness2-button-container">
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
          <><div className="selected-option-container">
            <div className="selected-option">
              <h2>You have selected "{selectedOption}"</h2>
              <p>If you are feeling these specific emotions and you want to pursue finding out more about these specific emotions feel free to visit the following websites:</p>
              <ul>
              <li><a href="https://www.everydayhealth.com/emotional-health/all-about-sadness-what-causes-it-how-to-cope-with-it-and-when-to-get-help/">Click here!</a></li>
              <li><a href="https://www.paulekman.com/universal-emotions/what-is-sadness/">Click here!</a></li>
              <li><a href="https://www.berkeleywellbeing.com/sadness.html">Click here!</a></li>
              <li><a href="https://www.verywellmind.com/sadness-is-not-depression-2330492">Click here!</a></li>

            </ul>
            </div>
          </div><div className="text-box-container">
            <div className="text-box">
            <h2>General Information about Sadness:</h2>
            <ul>
  <li>Sadness is a natural and normal human emotion that can be triggered by a variety of situations, such as loss, disappointment, or failure.</li>
  <li>It is typically characterized by feelings of sorrow, emptiness, and low mood, and can manifest in both physical and emotional ways, such as decreased energy, changes in appetite, and social withdrawal.</li>
  <li>Sadness can be a healthy and appropriate response to certain situations, and can provide an opportunity for reflection and growth.</li>
  <li>However, chronic or unmanaged sadness can lead to a range of negative consequences, including depression, anxiety, and difficulty functioning in daily life.</li>
  <li>There are many techniques and strategies that can help individuals manage their sadness in healthier ways, such as engaging in self-care activities, talking to a trusted friend or professional, and seeking support from a community or social network.</li>
</ul>
            </div>
  
            </div></>
        );
      default:
        return (
          <div className="sadness-button-container">
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
    <div className='sadness-header-container'>
      <h1>Sadness</h1>
      {renderOptions()}
      {renderBackButton()}
      </div>
      <div className='animation-container'  ref={animationContainer}></div>
    </div>
  );
}

export default Sadness;