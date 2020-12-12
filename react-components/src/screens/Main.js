import React, { Component } from 'react'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import DishDetail from '../components/DishDetail'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AboutUs from './AboutUs'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
class Main extends Component {

    render() {
        const HomePage = () => {
            return(
                <Home 
                  dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                  leader={this.props.leaders.filter((leader) => leader.featured)[0]}    
                />
            );
          }

        const DishWithId = ({match}) => {
            console.log("dishwithid: ", match.params.dishId, parseInt(match.params.dishId,10))
            return (
                <DishDetail 
                  dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))}
                />
            );
        }  

        return (
            <div>
                <Header />
                    <Switch> 
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} /> 
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route exact path="/contactus" component={() => <Contact />} />
                        <Route exact path="/aboutus" component={() => <AboutUs leaders={this.props.leaders} />} />
                        <Redirect to="/home" />  
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main))