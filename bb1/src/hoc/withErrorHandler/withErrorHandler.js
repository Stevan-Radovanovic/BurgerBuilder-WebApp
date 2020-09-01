import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        error: null,
      };
    }

    componentDidMount() {
      this.int1 = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.int2 = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.int1);
      axios.interceptors.response.eject(this.int2);
    }

    render() {
      return (
        <React.Fragment>
          {this.state.error ? (
            <Modal modalHandler={this.errorConfirmHandler}>
              It ain't right!
            </Modal>
          ) : null}
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
