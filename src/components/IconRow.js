import React from 'react';
import '../stylesheets/IconRow.css'

function IconRow() {
  return (
    <div class='iconDiv'>
      <a href='https://github.com/HippErger'>
        <i class="fa fa-github fa-2x heady-Icon padded-Icon" aria-hidden="true"></i>
      </a>
      <a href='https://www.linkedin.com/in/clayton-berger/'>
        <i class="fa fa-linkedin-square fa-2x heady-Icon" aria-hidden="true"></i>
      </a>
      <a href='https://medium.com/@berger.clayton'>
        <i class="fa fa-medium fa-2x heady-Icon" aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default IconRow;


/*
      <a href='https://twitter.com/Berger_Clayton'>
        <i class="fa fa-twitter-square fa-2x heady-Icon" aria-hidden="true"></i>
      </a>
*/
