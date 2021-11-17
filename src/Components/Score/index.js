import React, {useState, useEffect} from 'react';
import '../Score/score.css';


function Score(props) {
    const [currentScore, setCurrentScore] = useState(0);
    
    useEffect(() => {
      setCurrentScore(props.currentscore);
    }, [props.currentscore]);

  return (
        <div className="scoreContainer">
          <h5>
            Your Speed :
          </h5>
          <h1 className="wpmCounter">
          {currentScore} WPM
          </h1>
        <h3>
          Top Three***
        </h3>
        
        </div>
      );
}

export default Score;