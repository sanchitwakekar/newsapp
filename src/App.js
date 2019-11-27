import React from 'react';
import NewsContainer from './Components/NewsContainer';
import SidebarList from './Components/SidebarList';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="outer-grid-container">
          <div>
            <SidebarList {...this.props}/>
          </div>
          <div className="inner-grid-container">
            <NewsContainer {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
