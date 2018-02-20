import React, {Component} from 'react';
import DisplayItem from './DisplayItem';
import { Link, browserHistory } from 'react-router';
// Component for Edit an employee
class EditItem extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        axios.get(`http://localhost:8000/api/employee/${this.props.params.id}`)
        .then(response => {
          this.setState({ EmpCode: response.data.EmpCode, LastName: response.data.LastName,FirstName: response.data.FirstName,Office: response.data.Office,Position: response.data.Position,id: response.data.id });
        })
        .catch(function (error) {
          console.log(error);
        })
      }

// Handle the onchange in input fields
      handleChange(input, value){
        var products = {};
        products[input] = value;
        this.setState(products)
        }
// Handle the submit action
      handleSubmit(e){
        e.preventDefault();
        let uri = 'http://localhost:8000/api/employee';
        axios.put(uri, this.state).then((response) => {
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
              <input type="hidden" className="form-control" value = {this.state.id} onChange={e => this.handleChange('id', e.target.value)}/>
                <label>First Name:</label>
                <input type="text" className="form-control" value = {this.state.FirstName} onChange={e => this.handleChange('FirstName', e.target.value)}/>
              </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
                <label>Last Name:</label>
                <input type="text" className="form-control" value = {this.state.LastName} onChange={e => this.handleChange('LastName', e.target.value)}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Position:</label>
                  <input type="text" className="form-control col-md-6" value = {this.state.Position} onChange={e => this.handleChange('Position', e.target.value)}/>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Employee Code:</label>
                <input type="text" className="form-control" value = {this.state.EmpCode} onChange={e => this.handleChange('EmpCode', e.target.value)}/>
              </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
                <label>Office:</label>
                <input type="text" className="form-control" value = {this.state.Office} onChange={e => this.handleChange('Office', e.target.value)}/>
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
export default EditItem;