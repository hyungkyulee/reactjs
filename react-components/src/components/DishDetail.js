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

  renderDish = (dish) => {
    console.log('DishDetail: ', dish)
    if (dish != null) {
      return(
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
      );
    }
    else {
      return(
          <div></div>
      );
    }
  }

  renderComments = (comments) => {
    if (comments != null) {
      return(
        <Card>
          <CardBody>
            <CardTitle>
              <h4>Comments</h4>
            </CardTitle>
              {comments.map(item => {
                // const itemDate = {new Intl.DateTimeFormat('en-US', {
                //                     year: 'numeric',
                //                     month: 'short',
                //                     day: '2-digit'
                //                 }).format(new Date(Date.parse(commnts.date)))}
                const itemDate = moment(item.date).format('DD-MM-YYYY')
                return(
                  <div key={item.id}>
                    <CardText>
                      {item.comment}
                    </CardText>
                    <CardFooter>
                      {item.author} {itemDate}
                    </CardFooter>
                  </div>
                )
              })}
          </CardBody>
        </Card>
      )
    }
    else {
      <div></div>
    }
  }

  render() {
    const { dish, comments } = this.props

    if(dish!=null) {
      return(
        <Row>
          <Col xs="6">
            {this.renderDish(dish)}
          </Col>
          <Col xs="6">
            {this.renderComments(comments)}
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