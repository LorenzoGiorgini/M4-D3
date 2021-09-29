import Alert from "react-bootstrap/Alert"

const WarningSign = ({warningText}) => (
    
    <Alert variant='danger'>
        <p>{warningText}</p>
    </Alert>
)

export default WarningSign 