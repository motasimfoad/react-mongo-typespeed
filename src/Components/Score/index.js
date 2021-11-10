import React, {useState, useEffect} from 'react';
import '../Score/score.css';

function Score(props) {
 
  return (
        <div className="scoreContainer">
          <h5>
            Your Speed :
          </h5>
          <h1 className="wpmCounter">
          500 WPM
          </h1>
        <h3>
          Top Three***
        </h3>
          <ul>
              <li>
                  ABC 20WPM
              </li>
              <li>
                  DEF 50WPM
              </li>
          </ul>
        </div>
      );
}

export default Score;