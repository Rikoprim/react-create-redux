import React, { Component } from "react";
import TableComponents from "../components/TableComponents";
import { connect } from "react-redux";
import { getUsersList, deleteDataUsers } from "../actions/UserActions";

class HomeContainers extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUsers());
  }
  render() {
    return (
      <div>
        <TableComponents />
      </div>
    );
  }
}

export default connect()(HomeContainers);
