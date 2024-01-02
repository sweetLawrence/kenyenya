import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCaretDown,
  FaCaretRight,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import '../Styles/administration.css'; 

function Menu() {
  const [isOneActive, setIsOneActive] = useState(false);
  const [isTwoActive, setIsTwoActive] = useState(false);
  const [selectedContent, setSelectedContent] = useState('Board Of Management');
  const [isNavVisible, setIsNavVisible] = useState(false);

  function handleDropDown1() {
    setIsOneActive(!isOneActive);
  }

  function handleDropDown2() {
    setIsTwoActive(!isTwoActive);
  }

  function handleVisibility() {
    setIsNavVisible(!isNavVisible);
  }

  function handleContentSelection(content) {
    setSelectedContent(content);
    setIsNavVisible(false);
  }



  return (
    <div className="holder">
      <Link className="open-btn" onClick={handleVisibility}>
        <FaBars />
      </Link>

      <div className={`side-nav ${isNavVisible ? 'show' : ''}`}>
        <Link className="close-btn" onClick={handleVisibility}>
          <FaTimes />
        </Link>
        <Link
          className={`side-btns ${
            selectedContent === 'Board Of Management' ? 'active' : ''
          }`}
          onClick={() => handleContentSelection('Board Of Management')}
        >
          Board Of Management
        </Link>
        <Link
          className={`side-btns ${
            selectedContent === 'The Principal' ? 'active' : ''
          }`}
          onClick={() => handleContentSelection('The Principal')}
        >
          The Principal
        </Link>
        <Link
          className={`side-btns ${
            selectedContent === 'The Deputy Principal' ? 'active' : ''
          }`}
          onClick={() => handleContentSelection('The Deputy Principal')}
        >
          The Deputy Principal
        </Link>
        <Link
          className={`side-btns ${
            selectedContent === 'The Dean of Curriculum' ? 'active' : ''
          }`}
          onClick={() => handleContentSelection('The Dean of Curriculum')}
        >
          The Dean of Curriculum
        </Link>
        <Link className="dropdown-btn" onClick={handleDropDown1}>
          The Dean of Teacher Trainees{' '}
          {isOneActive ? <FaCaretDown /> : <FaCaretRight />}
        </Link>
        {isOneActive && (
          <div className="drop-content">
            <Link
              className={`side-btns ${
                selectedContent === 'Boarding' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('Boarding')}
            >
              Boarding
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'Guidance and Councelling' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('Guidance and Councelling')}
            >
              Guidance and Councelling
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'Health Unit' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('Health Unit')}
            >
              Health Unit
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'Sports' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('Sports')}
            >
              Sports
            </Link>
          </div>
        )}
        <Link className="dropdown-btn" onClick={handleDropDown2}>
          Head(s) of Department(s) {isTwoActive ? <FaCaretDown /> : <FaCaretRight />}
        </Link>
        {isTwoActive && (
          <div className="drop-content">
            <Link
              className={`side-btns ${
                selectedContent === 'Academics' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('Academics')}
            >
              Academics
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'PC' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('PC')}
            >
              PC
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'TPAD' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('TPAD')}
            >
              TPAD
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'T.P Coordinator' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('T.P Coordinator')}
            >
              T.P Coordinator
            </Link>
            <Link
              className={`side-btns ${
                selectedContent === 'Finance' ? 'active' : ''
              }`}
              onClick={() => handleContentSelection('Finance')}
            >
              Finance
            </Link>
          </div>
        )}
        <Link
          className={`side-btns ${
            selectedContent === 'Trainees Council' ? 'active' : ''
          }`}
          onClick={() => handleContentSelection('Trainees Council')}
        >
          Trainees Council
        </Link>
      </div>
      <div className="content">
        <h1>{selectedContent}</h1>
      </div>
    </div>
  );
}

export default Menu;