import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData, postData} from '../actions/actions.js';


class Lend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postData(this.state.name);
    this.setState({
      name: ''
    });
  }
  display() {
    return this.props.toggle === 'lend' ? 'block' : 'none';
  }

  render() {
    const display = this.display();
    return (
      <div style={{display}}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.name} type="text" onChange={this.handleChange.bind(this)}/>
          <button>submit</button>
          </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postData: postData }, dispatch );
}
export default connect(null, mapDispatchToProps)(Lend);