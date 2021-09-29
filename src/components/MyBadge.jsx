import Badge from "react-bootstrap/Badge"

const MyBadge = ({color , message}) => (
    <div>
     <Badge variant={color}>{message}</Badge>
    </div>
)

export default MyBadge