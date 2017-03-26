import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData} from '../actions/actions.js';
import axios from 'axios';

class Borrow extends React.Component {
  display() {
    return this.props.toggle === 'borrow' ? 'block' : 'none';
  }
  componentWillMount() {
    this.props.getData();
    // const request = axios.post('http://reduxblog.herokuapp.com/api/posts?key=43331', {title: 'sally'});
    // console.log(request);
  }
  render() {
    var cats = this.props.data.map(cat =>{
      return <div>{cat.title}</div>;
    });
    
    console.log(cats);
    const display = this.display();
    return (
      <div style={{display}}>{cats}</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData: getData }, dispatch );
}

function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps, mapDispatchToProps)(Borrow);