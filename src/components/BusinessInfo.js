import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getItem} from '../Utils/webStorage';

class BusinessInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            ssn: '',
            state: '',
            zipcode: ''
        }
    }

    handleNextClick = ()=>{
        this.props.onSubmit(this.state);
        this.props.history.push('/card');
    }

    handlePrevClick = () =>{
        this.props.history.push('/');
    }

    handleInput = (e) =>{
        if(e.target.id === 'sameAsPersonal'){
            this.setState({[e.target.id]:e.target.checked});
        }else{
            this.setState({[e.target.id]:e.target.value});
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.sameAsPersonal !== this.state.sameAsPersonal){
            if(this.state.sameAsPersonal){
                const {address, state, city, zipcode} = getItem('personalInfo');
                this.setState({
                    address, state, city, zipcode
                });
             }else{
                this.setState({
                    address:'', state:'', city:'', zipcode:''
                });
             }
        }
    }

    componentDidMount(){ 
        this.setState(getItem('businessInfo'));
        if(!this.props.isReview)this.props.onSubmit(this.state);
    }

    render(){
        return (
            <div>
            <h1>Business Info</h1>
            <fieldset disabled={this.props.isReview}>
            <form onSubmit={this.handleNextClick}>
            <label htmlFor="name">
                Business Name : <input type="text" required id="name" value={this.state.name} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="company">
                Company Registered : <input type="text" required id="company" value={this.state.company} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="address">
                Address : <input type="text" id="address" required value={this.state.address} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="sameAsPersonal">
                Same as Personal: <input type="checkbox"  id="sameAsPersonal" checked={this.state.sameAsPersonal} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="city">
                City : <input type="text" id="city" required value={this.state.city} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="state">
                State : <input type="text" id="state" pattern="[A-Za-z]{2}" required value={this.state.state} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="zipcode">
                Zip Code : <input type="number" id="zipcode" required value={this.state.zipcode} onChange={this.handleInput}></input>
            </label>
            <br></br>

            {this.props.isReview?null:<><button onClick={this.handlePrevClick}>Back</button>
            <input type="submit" value="Next"/></>}
            </form>
            </fieldset>
            </div>
        )

    }

}

export default withRouter(BusinessInfo);
