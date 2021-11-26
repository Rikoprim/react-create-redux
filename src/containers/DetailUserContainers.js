import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponents from "../components/BackComponents";
import { connect } from "react-redux";
import { getUsersDetail } from "../actions/UserActions";
import DetailUsersComponents from "../components/DetailUsersComponents";

class DetailUserContainers extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <BackComponents />
        <h1>Detail User</h1>
        <DetailUsersComponents />
      </Container>
    );
  }
}
export default connect() (DetailUserContainers);
