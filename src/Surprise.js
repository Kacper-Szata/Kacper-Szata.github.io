import React, { useEffect, useState, useRef } from 'react';
import './Surprise.css';
import Lottie from 'lottie-web';
import animationData1 from './sampling.json';
import animationData2 from './medium.json';
import animationData3 from './big.json';


function Surprise() {
  const [selectedOption, setSelectedOption] = useState('');
  const animationContainer = useRef(null);
  
  useEffect(() => {
    let animData;
    switch (selectedOption) {
      case 'moved':
      case 'overcome':
      case 'amazed':
      case 'confused':
      case 'stunned':
        animData = animationData2;
        break;
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
      case 'moved':
        return (
          <div className="surprise2-button-container">
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
              <div className="surprise2-button-container">
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
          <div className="surprise2-button-container">
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
          <div className="surprise2-button-container">
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
          <div className="surprise2-button-container">
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
          <><div className="selected-option-container">
            <div className="selected-option">
              <h2>You have selected "{selectedOption}"</h2>
              <p>If you are feeling these specific emotions and you want to pursue finding out more about these specific emotions feel free to visit the following websites:</p>
              <ul>
              <li><a href="https://www.paulekman.com/universal-emotions/what-is-surprise/">Click here!</a></li>
              <li><a href="https://www.psychologytoday.com/ie/blog/fulfillment-any-age/202204/the-unexplored-emotion-surprise">Click here!</a></li>
              <li><a href="https://psychology.iresearchnet.com/social-psychology/emotions/surprise/">Click here!</a></li>
              <li><a href="https://exploringyourmind.com/surprise-a-fleeting-and-unexpected-emotion/">Click here!</a></li>

            </ul>
            </div>
          </div><div className="text-box-container">
            <div className="text-box">
              <h2>General Information about Surprise:</h2>
              <ul>
  <li>Surprise is an emotion that is typically triggered by unexpected events or experiences.</li>
  <li>It is a brief and intense emotion that is characterized by feelings of astonishment, amazement, or wonder.</li>
  <li>Surprise can be caused by both positive and negative events, such as receiving unexpected news, witnessing a surprising event, or experiencing a sudden change in circumstances.</li>
  <li>Physiological responses to surprise include an increase in heart rate, a surge in adrenaline, and changes in facial expressions and body language.</li>
  <li>Surprise can have both positive and negative effects on cognitive processing, memory, and decision-making.</li>
  <li>It can also play an important role in social interactions, such as in humor, storytelling, and creative expression.</li>
  <li>Surprise can be used as a tool for marketing, advertising, and product design, as it can capture attention and create memorable experiences for consumers.</li>
</ul> 
            </div>
  
            </div></>
        );
      default:
        return (
          <div className="joy-button-container">
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
      <div className='fear-header-container'>
      <h1>Surprise</h1>
      {renderOptions()}
      {renderBackButton()}
      </div>
      <div className='animation-container'  ref={animationContainer}></div>
    </div>
  );
}

export default Surprise;
