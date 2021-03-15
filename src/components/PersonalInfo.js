import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getItem} from '../Utils/webStorage';

class PersonalInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            ssn:'',
            address:'',
            city:'',
            state: '',
            zipcode: '',
        };
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
            <div className="form-container">
                <h1>Personal Info</h1>
                <fieldset disabled={this.props.isReview}>
            <form onSubmit={this.handleNextClick}>
            <label htmlFor="name">
                Name : <input type="text" id="name" required value={this.state.name} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="ssn">
                SSN : <input type="text" id="ssn" required pattern="[0-9]{9}" value={this.state.ssn} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="address">
                Address : <input type="text" id="address" required value={this.state.address} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="city">
                City : <input type="text" id="city" required value={this.state.city} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="state">
                State : <input type="text" id="state" required pattern="[A-Za-z]{2}" value={this.state.state} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="zipcode">
                Zip Code : <input type="text" id="zipcode" required value={this.state.zipcode} onChange={this.handleInput}></input>
            </label>
            <br></br>
            {this.props.isReview?null:<div className="button-container"><input type="submit" value="Next"/></div>}
            </form>
            </fieldset>
            </div>
        )
      
    }

}

export default withRouter(PersonalInfo);
