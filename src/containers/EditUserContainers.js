import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponents from "../components/BackComponents";
import { connect } from "react-redux";
import FormComponents from "../components/FormComponents";
import { getUsersDetail, putUsersEdit } from "../actions/UserActions";
import swal from "sweetalert";

const mapStateToProps = state => {
  return {
    getResponseDataUsers: state.users.getResponseDataUsers,
    errorResponseDataUsers: state.users.errorResponseDataUsers
  };
};

class EditUserContainers extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUsersEdit(data, this.props.match.params.id));
  }
  render() {
    if (this.props.getResponseDataUsers || this.props.errorResponseDataUsers) {
      if (this.props.errorResponseDataUsers) {
        swal("Failed!", this.props.errorResponseDataUsers, "error");
      } else {
        swal(
          "User Updated!",
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
        <h1>Edit User</h1>
        <FormComponents onSubmit={data => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainers);
