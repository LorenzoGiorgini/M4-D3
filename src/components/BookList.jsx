import {Component} from "react"
import SingleBook from "./SingleBook"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"


let filteredBooks = [

]

class BookList extends Component {

    state = {
        title: ""
    }

    filtredBooksList = (query) => {
        filteredBooks = this.props.prop.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
    )}

    render() {
        return(
            <Row className="d-flex justify-content-center my-5">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control onChange={e => (this.setState({title: e.target.value}))} value={this.state.title} type="text" placeholder="Search Book" />
                </Form.Group>
                <Row>
                    {
                        this.filtredBooksList(this.state.title),
                        filteredBooks.map(book => (
                            <Col>
                                <SingleBook key={book.asin} obj={book}/>
                            </Col>
                        ))
                    }
                </Row>
            </Row>
        )
    }
}


export default BookList