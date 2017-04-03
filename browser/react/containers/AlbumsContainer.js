import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps)=>{
  return {
      albums: state.albums.list
  }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);


//TEMPLATE
// const mapStateToProps = (state, ownProps)=>{
//   return{

//   }
// }

// const mapDispatchToProps = (dispatch, ownProps)=>{
//   return{

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Albums);
