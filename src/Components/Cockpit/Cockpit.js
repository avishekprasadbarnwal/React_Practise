import React, {useEffect, useRef, useContext} from 'react';
import './Cockpit.css';
import AuthContext from '../../Context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef();
  const authContext = useContext(AuthContext);

  console.log(authContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect()');
    // setTimeout(() => {
    //   alert('Data is saved')
    // }, 1000);

    toggleBtnRef.current.click();

    return (() => {
      console.log('[Cockpit.js] useEffect() cleanup successfull');
    });
  },[]);

  useEffect(() => {
    console.log('[Cockpit.js] second useEffect');
    return (() => {
      console.log('[Cockpit.js] cleanup work for second useEffect');
    });
    
  });

  const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    if(props.showPerson){
        style.backgroundColor = 'red';
    }

    let classes = [];
    if(props.personsLength < 3){
      classes.push('red');
    } 
    if(props.personsLength < 2){
      classes.push('bold');
  }

  return(
        <div >
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                style={style}
                onClick={props.clicked}>Toggle Person</button>
                <button 
                  style={style} 
                  onClick={authContext.login}>Login</button>
        </div>
  )
}

export default React.memo(Cockpit);
