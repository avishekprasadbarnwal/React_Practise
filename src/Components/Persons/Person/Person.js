import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import authContext from '../../../Context/auth-context';
import './Person.css';


class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = authContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    
    render(){
    return (
        <Auxiliary>
        {this.context.authenticated ? <p> Authenticated </p> : <p>Please Login</p>}
        <div className="Person">
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p >{this.props.children}</p>
            <input
                key="i3"
                ref={this.inputElementRef} 
                type="text" 
                onChange={this.props.changed}  
                value={this.props.name} 
                    
            />
        </div>
        </Auxiliary>
        )    
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person);