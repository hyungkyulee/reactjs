import React, { Component } from 'react'
import { 
  Row,
  Col,
  Card, 
  CardImg, 
  CardImgOverlay, 
  CardText, 
  CardBody, 
  CardTitle,
  CardFooter
} from 'reactstrap'
import { DISHES } from '../common/dishes'
import moment from 'moment'
import CommentForm from './CommentForm'
import { Loading } from './Loading'
import { baseUrl } from '../common/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

/**************** 
  Functional way
  */
// const DishDetail = ({dish}) => {
// if(dish != null) {
//     return(
//         <Card>
//             <CardImg top src={dish.image} alt={dish.name} />
//             <CardBody>
//               <CardTitle>{dish.name}</CardTitle>
//               <CardText>{dish.description}</CardText>
//             </CardBody>
//         </Card>
//     )
//   }
//   else {
//     return (
//       <div></div>
//     )
//   }
// }

/**************** 
  Class
  */
class DishDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES
    }
  }

  renderDish = (dish, loading, error) => {
    console.log('DishDetail: ', dish)
    if (loading) {
      return(
          <Loading />
      )
    }
    else if (error) {
      return(
          <h4>{error}</h4>
      )
    }
    else if (dish != null) {
      return(
          <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
          <Card>
              <CardImg top src={baseUrl + dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
          </FadeTransform>
      )
    }
    else {
      return(
          <div></div>
      );
    }
  }

  renderComments = (dishId, comments) => {
    if (comments != null) {
      return(
        <Card>
          <CardBody>
            <CardTitle>
              <h4>Comments</h4>
            </CardTitle>
              <Stagger in>
              {comments.map(item => {
                // const itemDate = {new Intl.DateTimeFormat('en-US', {
                //                     year: 'numeric',
                //                     month: 'short',
                //                     day: '2-digit'
                //                 }).format(new Date(Date.parse(commnts.date)))}
                const itemDate = moment(item.date).format('DD-MM-YYYY')
                return(
                  <Fade in>
                  <div key={item.id}>
                    <CardText>
                      {item.comment}
                    </CardText>
                    <CardFooter>
                      {item.author} {itemDate}
                    </CardFooter>
                  </div>
                  </Fade>
                )
              })}
              </Stagger>
          </CardBody>
          <CommentForm dishId={dishId}
            comments={comments}
            postComment={this.props.postComment}
          />
        </Card>
      )
    }
    else {
      <div></div>
    }
  }

  render() {
    const { dish, dishesLoading, dishesErrorMessage, comments } = this.props

    if(dish!=null) {
      return(
        <Row>
          <Col xs="6">
            {this.renderDish(dish, dishesLoading, dishesErrorMessage)}
          </Col>
          <Col xs="6">
            {this.renderComments(dish.id, comments)}
          </Col>
        </Row>
      )
    }
    else {
      return(
        <div>
          <p>dish is null</p>
        </div>
      )
    }
  }
}


export default DishDetail