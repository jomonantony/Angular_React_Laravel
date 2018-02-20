import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
// Component for displaying each row
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
// To call the delete API function
/**
 * 
 * @param {*} event 
 */
    handleDelete(event) {
      event.preventDefault();
      let uri = `http://localhost:8000/api/employee/${this.props.obj.id}`;
      //axios.delete(uri);
        //browserHistory.push('/display-item');
        axios.delete(uri).then((response) => {
          browserHistory.push('/add-item');
        });
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.FirstName} - {this.props.obj.LastName}
          </td>
          <td>
            {this.props.obj.Position}
          </td>
          <td>
            {this.props.obj.Office}
          </td>
          <td>
            {this.props.obj.EmpCode}
          </td>
          <td>
          <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <form onSubmit={this.handleDelete}>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;