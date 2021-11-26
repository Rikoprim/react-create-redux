import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponents from "../components/BackComponents";
import FormComponents from "../components/FormComponents";
import { postUsersCreate } from "../actions/UserActions";
import { connect } from "react-redux";
import swal from "sweetalert";

const mapStateToProps = state => {
  return {
    getResponseDataUsers: state.users.getResponseDataUsers,
    errorResponseDataUsers: state.users.errorResponseDataUsers
  };
};

class CreateUserContainers extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUsersCreate(data));
  }

  render() {
    if (this.props.getResponseDataUsers || this.props.errorResponseDataUsers) {
      if (this.props.errorResponseDataUsers) {
        swal("Failed!", this.props.errorResponseDataUsers, "error");
      } else {
        swal(
          "User Created!",
          "Nama : " +
            this.props.getResponseDataUsers.nama +
            " , Umur : " +
            this.props.getResponseDataUsers.umur,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponents />
        <h1>Create User</h1>
        <FormComponents onSubmit={data => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(CreateUserContainers);
