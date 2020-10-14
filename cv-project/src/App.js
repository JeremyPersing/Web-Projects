import React, { Component } from 'react';
import Information from './components/Information';
import Education from './components/Education';
import Work from './components/Work';


class App extends Component {

  render() {
    return (
      <div class="container">
        <h1 class="text-center" id="title">Resume Builder</h1>
        <Information />
        <Education />
        <Work />
      </div>

    )
  }
}


export default App;