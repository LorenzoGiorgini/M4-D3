import Card from "react-bootstrap/Card"
import MyBadge from "./MyBadge"


const SingleBook = (obj) => (
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={obj.obj.img} />
        <Card.Body>
            <Card.Title>{obj.obj.title}</Card.Title>
            <MyBadge color="primary" message={obj.obj.price}/>
        </Card.Body>
    </Card>
)


export default SingleBook