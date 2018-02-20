// CreateItem.js

import React, {Component} from 'react';
import DisplayItem from './DisplayItem';
import { Link, browserHistory } from 'react-router';
// Component for create an employee
/**
 * 
 */
class CreateItem extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

// Handle the on change in input fields
/**
 * 
 * @param {*} input 
 * @param {*} value 
 */
      handleChange(input, value){
        var products = {};
        products[input] = value;
        this.setState(products)
        }
// Handle the submit action
/**
 * 
 * @param {*} e 
 */
      handleSubmit(e){
        e.preventDefault();
        let uri = 'http://localhost:8000/api/employee';
        axios.post(uri, this.state).then((response) => {
          //debugger;
          browserHistory.push('/display-item');
        });
      }
    render() {
      return (
      <div>
        <h1>Create An Item</h1>
        <div className="row col-md-6">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>First Name:</label>
                <input type="text" className="form-control" onChange={e => this.handleChange('FirstName', e.target.value)}/>
              </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
                <label>Last Name:</label>
                <input type="text" className="form-control" onChange={e => this.handleChange('LastName', e.target.value)}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Position:</label>
                  <input type="text" className="form-control col-md-6" onChange={e => this.handleChange('Position', e.target.value)}/>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Employee Code:</label>
                <input type="text" className="form-control" onChange={e => this.handleChange('EmpCode', e.target.value)}/>
              </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
                <label>Office:</label>
                <input type="text" className="form-control" onChange={e => this.handleChange('Office', e.target.value)}/>
              </div>
            </div>
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
        </div>
        <div className="row col-md-6">
        </div>
  </div>
      )
    }
}
export default CreateItem;