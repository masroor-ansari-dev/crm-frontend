import {Form,Button} from "react-bootstrap"

export const UpdateTicket = ({handleOnChange,handleOnSubmit,message}) =>{

    return (
        <div>
          <Form onSubmit={handleOnSubmit}>
          
    <Form.Label className="mt-2">Reply</Form.Label>
    <div>
    <Form.Text>
      Please reply your message here or update the ticket
    </Form.Text>
  </div>
            <Form.Control
              value={message}
              onChange={handleOnChange}
              as="textarea"
              row="5"
              name="detail"
            />
            <div className="text-right mt-3 mb-3">
              <Button variant="info" type="submit">
                Reply
              </Button>
            </div>
          </Form>
        </div>
      );
    };

