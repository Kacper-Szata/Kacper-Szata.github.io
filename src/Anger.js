import React, { useEffect, useState, useRef } from 'react';
import './Anger.css';
import Lottie from 'lottie-web';
import animationData1 from './sampling.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';

function Anger() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);
 

  useEffect(() => {
    let animData;
    switch (selectedOption) {
      case 'enraged':
      case 'exasperated':
      case 'irritable':
      case 'jealous':
      case 'disgusted':
        animData = animationData2;
        break;
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
          <><div className="selected-option-container">
            <div className="selected-option">
              <h2>You have selected "{selectedOption}"</h2>
              <p>If you are feeling these specific emotions and you want to pursue finding out more about these specific emotions feel free to visit the following websites:</p>
              <ul>
              <li><a href="https://www.psychologytoday.com/us/basics/anger">Click here!</a></li>
              <li><a href="https://www.helpguide.org/articles/relationships-communication/anger-management.htm">Click here!</a></li>
              <li><a href="https://www.verywellmind.com/what-is-anger-5120208">Click here!</a></li>
              <li><a href="https://www.paulekman.com/universal-emotions/what-is-anger/">Click here!</a></li>

            </ul>
            </div>
          </div><div className="text-box-container">
            <div className="text-box">
            <h2>General Information about Joy:</h2>
            <ul>
  <li>Anger is a natural emotion that can be triggered by a variety of situations, such as feeling threatened, frustrated, or insulted.</li>
  <li>It is typically characterized by feelings of intense frustration, irritation, and hostility, and can manifest in both physical and emotional ways, such as increased heart rate, muscle tension, and aggressive behavior.</li>
  <li>Anger can be a normal and healthy response to certain situations, but it can also become problematic when it is expressed in ways that are harmful to oneself or others.</li>
  <li>Chronic or unmanaged anger can lead to a range of negative consequences, including health problems, relationship issues, and difficulty functioning in daily life.</li>
  <li>There are many techniques and strategies that can help individuals manage their anger in healthier ways, such as deep breathing, mindfulness, assertive communication, and problem-solving.</li>
</ul>
            </div>
  
            </div></>
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
     <div className='anger-header-container'>
      <h1>Anger</h1>
      {renderOptions()}
      {renderBackButton()}
      </div>
      <div className='animation-container'  ref={animationContainer}></div>
    </div>
  );
}

export default Anger;