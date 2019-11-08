import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboad from './components/dashboard/Dashboad';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Router path="/" component={Dashboad} />
          <Router path="/projects:id" component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
