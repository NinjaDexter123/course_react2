

import React, {useState} from 'react';
import {props, PropTypes} from 'prop-types'

export default function ReverseString(str) {
    const handleReverseClick = () => {
        console.log("Convert to reverse text clicked." + text);
       const revString = () => {
            str.split('').reverse().join('');
           } 
        let newText = text.reverseString(str);
        setText(newText);
        }
        const [text, setText] = useState('Party with stars');
    
    return (
        <>
         <div>
         <p>
         setText(newText);
         </p></div>
        </>

       
    );
  }