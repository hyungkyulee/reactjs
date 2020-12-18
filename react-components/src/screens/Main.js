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
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/actionCreators'
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

// assignment expression for a function
const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetContactForm: () => { dispatch(actions.reset('contactForm'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
})

// const mapDispatchToProps = dispatch => {
//     return {
//         addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
//         fetchDishes: () => dispatch(fetchDishes())
//     }
// }

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                  dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                  dishesLoading={this.props.dishes.isLoading}
                  dishesErrorMessage={this.props.dishes.errorMessage}
                  promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                  promoLoading={this.props.promotions.isLoading}
                  promoErrorMessage={this.props.promotions.errorMessage}
                  leader={this.props.leaders.filter((leader) => leader.featured)[0]}    
                />
            );
          }

        const DishWithId = ({match}) => {
            console.log("dishwithid: ", match.params.dishId, parseInt(match.params.dishId,10))
            return (
                <DishDetail 
                  dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                  dishesLoading={this.props.dishes.isLoading}
                  dishesErrorMessage={this.props.dishes.errorMessage}
                  comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                  commentsErrMess={this.props.comments.errorMessage}
                  addComment={this.props.addComment}
                />
            );
        }  

        return (
            <div>
                <Header />
                    <Switch> 
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} dishesLoading={this.props.dishes.isLoading} dishesErrorMessage={this.props.dishes.errorMessage} />} /> 
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route exact path="/contactus" component={() => <Contact resetContactForm={this.props.resetContactForm} />} />
                        <Route exact path="/aboutus" component={() => <AboutUs leaders={this.props.leaders} />} />
                        <Redirect to="/home" />  
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))