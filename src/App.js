import React, { Component } from 'react';


import Layout from './components/Layout/Layout';
import ClimbBuilder from './containers/ClimbBuilder/ClimbBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ClimbBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
