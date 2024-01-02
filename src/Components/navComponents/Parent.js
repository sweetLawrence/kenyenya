import React, { useState, useRef } from 'react';
import MainNav from './MainNav';
import Management from './Management';
import Dean from './Dean';
import HOD from './HOD';
import TechnicalMgt from './TechnicalMgt';
import CustomMenuIcon from './CustomMenuIcon';
import Warning from './Warning';

const Parent = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const [previousComponent, setPreviousComponent] = useState(null);
  // const [isMainNavOpen, setIsMainNavOpen] = useState(false);

  const navigationRef = useRef();

  const handleClick = (componentNumber) => {
    setPreviousComponent(activeComponent);
    setActiveComponent(componentNumber);
  };

  const goBack = () => {
    setActiveComponent(previousComponent);
  };

  const goBackMain = () => {
    setActiveComponent(1);
  };

  // const handleOutsideClick = (event) => {
  //   if (navigationRef.current && !navigationRef.current.contains(event.target)) {
  //     setIsMainNavOpen(false);
  //   }
  // };

  return (
    <div className="parent">
      {/* <CustomMenuIcon onClick={() => setIsMainNavOpen(!isMainNavOpen)} /> */}


        <div ref={navigationRef}>
          {activeComponent === 1 && (
            <MainNav onClick={handleClick} goBack={goBack} />
          )}
          {activeComponent === 2 && (
            <Management onClick={handleClick} goBackMain={goBackMain} />
          )}
          {activeComponent === 4 && <Dean onClick={handleClick} goBack={goBack} />}
          {activeComponent === 5 && <HOD onClick={handleClick} goBack={goBack} />}
          {activeComponent === 6 && (
            <TechnicalMgt onClick={handleClick} goBack={goBack} />
          )}
        </div>

        <Warning />
      
    </div>
  );
};

export default Parent;





// import React, { useState, useRef } from 'react';
// import MainNav from './MainNav';
// import Management from './Management';
// import Dean from './Dean';
// import HOD from './HOD';
// import TechnicalMgt from './TechnicalMgt';
// import CustomMenuIcon from './CustomMenuIcon';

// const Parent = () => {
//   const [activeComponent, setActiveComponent] = useState(1);
//   const [previousComponent, setPreviousComponent] = useState(null);
//   const [isMainNavOpen, setIsMainNavOpen] = useState(false);

//   const navigationRef = useRef();

//   const handleClick = (componentNumber) => {
//     setPreviousComponent(activeComponent);
//     setActiveComponent(componentNumber);
//   };

//   const goBack = () => {
//     setActiveComponent(previousComponent);
//   };

//   const goBackMain = () => {
//     setActiveComponent(1);
//   };

//   const handleOutsideClick = (event) => {
//     if (navigationRef.current && !navigationRef.current.contains(event.target)) {
//       setIsMainNavOpen(false);
//     }
//   };

//   return (
//     <div className="parent" onClick={handleOutsideClick}>
//       <CustomMenuIcon onClick={() => setIsMainNavOpen(!isMainNavOpen)} />

//       {isMainNavOpen && (
//         <div ref={navigationRef}>
//           {activeComponent === 1 && (
//             <MainNav onClick={handleClick} goBack={goBack} />
//           )}
//           {activeComponent === 2 && (
//             <Management onClick={handleClick} goBackMain={goBackMain} />
//           )}
//           {activeComponent === 4 && <Dean onClick={handleClick} goBack={goBack} />}
//           {activeComponent === 5 && <HOD onClick={handleClick} goBack={goBack} />}
//           {activeComponent === 6 && (
//             <TechnicalMgt onClick={handleClick} goBack={goBack} />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Parent;

