import React, {Component} from 'react'
import './style.css'


class Welcome extends Component{


  state = {

    username :'',
    phonenumber : '',
    email : '',
    password : ''
  }
 
  onChangeHandler = (e) =>{

    let text = e.target.name
    let val = e.target.value
    
    this.setState({[text]: val})
  }
  



  render(){

    return(

      <div>   

         <h1 > {this.state.username} </h1>
         <h1 > {this.state.phonenumber} </h1>
         <h1 > {this.state.email} </h1>
         <h1 > {this.state.password} </h1>
          <form >
            <div className='form-control'>
               <label>Name:</label><br/>
               <input type='text' name='username' onChange={this.onChangeHandler} /><br/>
               <input type='text' name='phonenumber' onChange={this.onChangeHandler} /><br/>
               <input type='text' name='email' onChange={this.onChangeHandler} /><br/>
               <input type='text' name='password' onChange={this.onChangeHandler} /><br/>
               <button type='submit'>Submit</button>
            </div>
          </form>      
      </div>
    )
  }

}

export default Welcome;

