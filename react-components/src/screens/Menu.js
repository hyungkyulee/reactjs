import React, {Component} from 'react'
import { 
  Container,
  Row,
  Col,
  Card, 
  CardImg, 
  CardImgOverlay, 
  CardText, 
  CardBody, 
  CardTitle
} from 'reactstrap'
import DishDetail from '../components/DishDetail';
import { Link } from 'react-router-dom'
import { Loading } from '../components/Loading';
import { baseUrl } from '../common/baseUrl'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDish: null,
      selectedDishId: null,
    }
  }

  onDishSelect = async (dish) => {
    // await this.setState({ selectedDish: dish, selectedDishId: dish.id});
    // console.log('>> selected; ', this.state.selectedDish)
    // console.log('>>> current dish: ', this.props.dishes.filter((item) => item.id === this.state.selectedDishId)[0])
    // return (
    //   <div className="row">
    //       <div  className="col-12 col-md-5 m-1">
    //         <DishDetail 
    //           selectedDish={this.state.selectedDish}
    //           // dishId={this.state.selectedDishId}
    //           welcome={'Welcome Test Props'}
    //         />
    //         {/* {this.renderDish(this.state.selectedDish)} */}
    //       </div>
    //     </div>
    // )
 
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      if (this.props.dishesLoading) {
        return(
            <Loading />
        )
      }
      else if (this.props.dishesErrorMessage) {
        return(
            <h4>{this.props.dishesErrorMessage}</h4>
        )
      }
      else {
        return (
          <Col xs="6">
            <Card key={dish.id} >
              <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Link>
            </Card>
          </Col>
        )
      }
    })

    return (
      <Container>
        <Row>
          {menu}
        </Row>
        
        {/* <DishDetail 
          dish={this.state.selectedDish}
        /> */}
      </Container>
    )
  }
}

export default Menu