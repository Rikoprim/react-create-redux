import React, { Component } from 'react'
import NavbarComponents from './components/NavbarComponents';
import JumbotronComponents from './components/JumbotronComponents';
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainers from './containers/HomeContainers';
import CreateUserContainers from './containers/CreateUserContainers';
import EditUserContainers from './containers/EditUserContainers';
import DetailUserContainers from './containers/DetailUserContainers';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponents />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainers} />
          <Route path="/create" exact component={CreateUserContainers} />
          <Route path="/edit/:id" exact component={EditUserContainers} />
          <Route path="/detail/:id" exact component={DetailUserContainers} />
        </BrowserRouter>
      </div>
    )
  }
}

