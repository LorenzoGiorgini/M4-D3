import {Component} from "react"
import Card from "react-bootstrap/Card"
import MyBadge from "./MyBadge"


class SingleBook extends Component {

    /* state = {
        selected : false
    }

    ifSelected() {

    } */

    render() {
        return(
            <>
                <Card /* onClick={() => ifSelected()}  */ style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={this.props.obj.img} />
                    <Card.Body>
                        <Card.Title>{this.props.obj.title}</Card.Title>
                        <MyBadge color="primary" message={this.props.obj.price}/>
                    </Card.Body>
                </Card>
            </>
        )
    }
}


export default SingleBook