import {Form,Row,Col} from "react-bootstrap"
import PropTypes from "prop-types"

export const SearchForm = ({handleOnChange,str}) =>{
    return(
        <Form>
             <Form.Group as={Row}>
                <Col>
                     <Form.Label column ms={2}>Search :</Form.Label>
                     <Form.Control
                        name="searchStr"
                        value={str}
                        onChange={handleOnChange}
                        placeholder="Search..."
                    />
                    </Col>
             </Form.Group>
        </Form>
    )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
};