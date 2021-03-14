import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getItem} from '../Utils/webStorage';

class PersonalInfo extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    handleNextClick = ()=>{
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.props.history.push('/business');
    }

    handleInput = (e) =>{
        this.setState({[e.target.id]:e.target.value});
    }

    componentDidMount(){
        this.setState(getItem('personalInfo'));
        if(!this.props.isReview)this.props.onSubmit(this.state);
    }

    render(){
        return (
            <div>
                <h1>Personal Info</h1>
                <fieldset disabled={this.props.isReview}>
            <form>
            <label htmlFor="name">
                Name : <input type="text" id="name" value={this.state.name} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="ssn">
                SSN : <input type="number" id="ssn" value={this.state.ssn} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="address">
                Address : <input type="text" id="address" value={this.state.address} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="city">
                City : <input type="text" id="city" value={this.state.city} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="state">
                State : <input type="text" id="state" value={this.state.state} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="zipcode">
                Zip Code : <input type="text" id="zipcode" value={this.state.zipcode} onChange={this.handleInput}></input>
            </label>
            <br></br>
            {this.props.isReview?null:<button onClick={this.handleNextClick}>Next</button>}
            </form>
            </fieldset>
            </div>
        )
      
    }

}

export default withRouter(PersonalInfo);
