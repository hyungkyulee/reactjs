import React, { Component } from 'react'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
// import About from './AboutComponent';
import DishDetail from '../components/DishDetail'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DISHES } from '../common/dishes'
import { COMMENTS } from '../common/comments'
import { PROMOTIONS } from '../common/promotions'
import { LEADERS } from '../common/leaders'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,  // lifting the state up
            comments: COMMENTS, 
            leaders: LEADERS, 
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                  leader={this.state.leaders.filter((leader) => leader.featured)[0]}    
                />
            );
          }

        const DishWithId = ({match}) => {
            console.log("dishwithid: ", match.params.dishId, parseInt(match.params.dishId,10))
            return (
                <DishDetail 
                  dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))}
                />
            );
        }  

        return (
            <div>
                <Header />
                    <Switch> 
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> 
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route exact path="/contactus" component={() => <Contact />} />
                        {/* <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} /> */}
                        <Redirect to="/home" />  
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main