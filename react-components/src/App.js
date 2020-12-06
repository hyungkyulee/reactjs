import React, { Component } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './screens/Main'

class App extends Component {

  render() {  
    return (
        <BrowserRouter>
            <div className="App">
                <Main /> 
            </div>
        </BrowserRouter>
    );
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dishes: DISHES
  //   }
  // }

  // render() {
  //   return (
  //     <>
  //       <BrowserRouter>
  //         <div className='App'>
  //           <Navbar dark color='primary'>
  //             <div className='container'>
  //               <NavbarBrand href='/'>The First Assignment - React Components</NavbarBrand>
  //             </div>
  //           </Navbar>

  //           <Header />

  //           <Switch>
  //             <Route path='/home' component={Home} />
  //             <Route exat path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
  //             <Route path='/contact' component={Contact} />
  //             <Redirect to='/home' />
  //           </Switch>

  //           <Footer />

  //         </div>

          
  //       </BrowserRouter>
  //     </>
  //   )
  // }

}

export default App;
