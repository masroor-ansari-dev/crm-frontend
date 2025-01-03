import {Container , Col , Row , Form,Button} from "react-bootstrap";
import PropTypes from "prop-types";


export const ResetPassword = ({handleOnChange,handleOnSubmit,frmSwitcher,email}) =>{
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label >Email Address</Form.Label>
                        <Form.Control 
                           type="email"
                           name="email"
                           value={email}
                    onChange={handleOnChange}
                           placeholder="Enter email"
                           ></Form.Control>
                        
                    </Form.Group>
                    <Button type="submit" className="mt-1">Login</Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" className="mt-4" onClick={()=>frmSwitcher("login")}>Logging</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.prototype = {
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
}