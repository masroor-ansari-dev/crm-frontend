import { Container,Form,Col,Row,Button } from "react-bootstrap"
import PropTypes from "prop-types"
import "./add-ticket-form.style.css";

export const AddTicketForm = ({handleOnChange,handleOnSubmit,frmData,frmDataError}) =>{
    return(
        <div className="mt-3 add-new-ticket bg-light">
        <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3} >Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                       type="text"
                       name="subject"
                       value={frmData.subject}
                onChange={handleOnChange}
                       placeholder="Enter email"
                       ></Form.Control>
                       <Form.Text>{frmDataError.subject && "Subject is required"}</Form.Text>
                       </Col>
                       <Form.Label column sm={3}>Issue Date</Form.Label>
                       <Col sm={9} className="mt-2">
                    <Form.Control 
                       type="date"
                       name="issueDate"
                       value={frmData.issueDate}
                       onChange={handleOnChange}
                       placeholder="Enter password"
                       ></Form.Control>
                       </Col>
                        <Form.Label>Details</Form.Label>
                        <Col className="p-2">
                    <Form.Control 
                        as="textarea"
                        name="issueDetails"
                        rows="5"
                        value={frmData.issueDetails} 
                        onChange={handleOnChange}
                        placeholder="Enter details"
                       ></Form.Control>
                       </Col>
                </Form.Group>
                <Button
              type="submit"
              variant="info"
              className="mt-4 w-100" // Full-width button
            >
              Open Ticket
            </Button>
            </Form>
            </Col>
        </Row>
    </Container>
    </div>
    )
}

AddTicketForm.propTypes = {
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit : PropTypes.func.isRequired,
    frmData : PropTypes.object.isRequired,
    frmDataError : PropTypes.object.isRequired
}