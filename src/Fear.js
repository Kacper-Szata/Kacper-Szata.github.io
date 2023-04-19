import React, { useEffect, useState, useRef } from 'react';
import './Fear.css';
import Lottie from 'lottie-web';
import animationData1 from './sampling.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';

function Fear() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);

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
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('frightened')} className="fear2-button">
            Frightened
          </button>
          <button onClick={() => handleOptionSelect('helpless')}className="fear2-button">
            Helpless
          </button>
        </div>
      );
    case 'insecure':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('inferior')}className="fear2-button">
            Inferior
          </button>
          <button onClick={() => handleOptionSelect('inadequate')}className="fear2-button">
            Inadequate
          </button>
        </div>
      );
    case 'terrified':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('panicked')}className="fear2-button">
            Panicked
          </button>
          <button onClick={() => handleOptionSelect('hysterical')}className="fear2-button">
            Hysterical
          </button>
        </div>
      );
    case 'nervous':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('worried')}className="fear2-button">
            Worried
          </button>
          <button onClick={() => handleOptionSelect('anxious')}className="fear2-button">
            Anxious
          </button>
        </div>
      );
    case 'horrified':
      return (
        <div className="fear2-button-container">
          <button onClick={() => handleOptionSelect('mortified')}className="fear2-button">
            Mortified
          </button>
          <button onClick={() => handleOptionSelect('dreadful')}className="fear2-button">
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
        <><div className="selected-option-container">
          <div className="selected-option">
            <h2>You have selected "{selectedOption}"</h2>
            <p>If you are feeling these specific emotions and you want to pursue finding out more about these specific emotions feel free to visit the following websites:</p>
            <ul>
              <li><a href="https://www.psychologytoday.com/us/basics/fear">Click here!</a></li>
              <li><a href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961">Click here!</a></li>
              <li><a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders">Click here!</a></li>
              <li><a href="https://www.apa.org/topics/anxiety">Click here!</a></li>

            </ul>
          </div>
        </div><div className="text-box-container">
          <div className="text-box">
            <h2>General Information about Fear:</h2>
            <ul>
  <li>Fear is a natural emotion that helps humans and animals respond to threats and danger.</li>
  <li>It is characterized by feelings of anxiety, nervousness, and apprehension.</li>
  <li>Fear can be triggered by various factors, including perceived threats to one's safety or well-being, unfamiliar or uncomfortable situations, and past traumatic experiences.</li>
  <li>The physical symptoms of fear may include increased heart rate, sweating, trembling, and heightened senses.</li>
  <li>Fear can be both a helpful and a harmful emotion. In appropriate situations, it can help individuals avoid danger and take necessary precautions. However, excessive or irrational fear can interfere with daily life and lead to anxiety disorders.</li>
  <li>Techniques like exposure therapy and cognitive-behavioral therapy can be used to help individuals overcome their fears and manage anxiety.</li>
  <li>Fear can also be experienced in response to non-physical threats, such as fear of failure or fear of rejection.</li>
</ul>

          </div>

          </div></>
      );
      
    default:
      return (
        <div className="fear-button-container">
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
    <div className='fear-header-container'>
      <h1>Fear</h1>
      {renderOptions()}
      {renderBackButton()}
    </div>
    <div className='animation-container' ref={animationContainer}></div>
  </div>
  );
}

export default Fear;