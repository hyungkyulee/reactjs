import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import { DISHES } from './common/dishes'
import Menu from './components/Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>The First Assignment - React Components</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />

      </div>
    )
  }
}

export default App;
