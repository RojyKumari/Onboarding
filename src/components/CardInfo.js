import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getItem} from '../Utils/webStorage';

class CardInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleNextClick = ()=>{
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.props.history.push('/review');
    }

    handleInput = (e) =>{
        if(e.target.id === 'sameAsPersonal' || e.target.id === 'sameAsBusiness'){
            this.setState({[e.target.id]:e.target.checked});
        }else{
            this.setState({[e.target.id]:e.target.value});
        }
    }

    handlePrevClick = () =>{
        this.props.history.push('/business');
    }

    componentDidMount(){
        this.setState(getItem('cardInfo'));
        if(!this.props.isReview)this.props.onSubmit(this.state);
        
    }

    render(){
        return (
            <div>
            <h1>Debit Card Info</h1>
            <fieldset disabled={this.props.isReview}>
            <form>
            <label htmlFor="name">
                Name to be Printed : <input type="text" id="name" value={this.state.name} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="address">
                Address : <input type="text" id="address" value={this.state.address} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="same">
                Same as Personal: <input type="radio" id="sameAsPersonal" name="same" checked={this.state.sameAsPersonal} onChange={this.handleInput}></input>
            </label>
            <label htmlFor="same">
                Same as Business: <input type="radio" id="sameAsBusiness" name="same" checked={this.state.sameAsBusiness} onChange={this.handleInput}></input>
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
                Zip Code : <input type="number" id="zipcode" value={this.state.zipcode} onChange={this.handleInput}></input>
            </label>
            <br></br>
            {this.props.isReview?null:<><button onClick={this.handlePrevClick}>Previous</button>
            <button onClick={this.handleNextClick}>Next</button></>}
            </form>
            </fieldset>
        </div>)

    }

}

export default withRouter(CardInfo);
