import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children } {/*tells app that if it ever has any children it should show them*/}
      </div>
    );
  }
}



// EXAMPLE BASED OF HOC BASED OFF OF CONNECT IS EXPLAINED IN HERE AND INDEX.JS
/*
    function mapStateToProps() {
      return { posts: state.posts };
    }

    // connect is a higher order component, we take the app component and enhance it
    // with external functionality (mapStateToProps). connect is specifically made to connect with
    // the provider in index.js
    export default connect(mapStateToProps)(App);
*/
