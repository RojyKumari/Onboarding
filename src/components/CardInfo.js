import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getItem} from '../Utils/webStorage';

class CardInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            address:'',
            city:'',
            state: '',
            zipcode: '',
            sameAsPersonal:false,
            sameAsBusiness: false,

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

    componentDidUpdate(prevProps, prevState){
        if(prevState.sameAsBusiness !== this.state.sameAsBusiness || prevState.sameAsPersonal !== this.state.sameAsPersonal){
            if(this.state.sameAsPersonal){
                const {address, state, city, zipcode} = getItem('personalInfo');
                this.setState({
                    address, state, city, zipcode
                });
            }else if(this.state.sameAsBusiness){
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
        this.setState(getItem('cardInfo'));
        if(!this.props.isReview)this.props.onSubmit(this.state);
        
    }

    render(){
        return (
            <div className="form-container">
            <h1>Debit Card Info</h1>
            <fieldset disabled={this.props.isReview}>
            <form onSubmit={this.handleNextClick}>
            <label htmlFor="name">
                Name to be printed : <input type="text" required id="name" value={this.state.name} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <label htmlFor="address">
                Address : <input type="text" id="address" required value={this.state.address} onChange={this.handleInput}></input>
            </label>
            <br></br>
            <div>
            <input type="radio" id="sameAsPersonal" name="same" checked={this.state.sameAsPersonal} onChange={this.handleInput}/>
            <label htmlFor="sameAsPersonal">
                Same as personal
            </label>
            <input type="radio" id="sameAsBusiness" name="same" checked={this.state.sameAsBusiness} onChange={this.handleInput}/>
            <label htmlFor="sameAsBusiness">
                Same as business
            </label>
            </div>
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
            {this.props.isReview?null:<div className="button-container"><button onClick={this.handlePrevClick}>Back</button>
            <input type="submit" value="Next"/></div>}
            </form>
            </fieldset>
        </div>)

    }

}

export default withRouter(CardInfo);
