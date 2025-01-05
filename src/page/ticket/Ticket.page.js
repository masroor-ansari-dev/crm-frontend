import { PageBreadCrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import tickets from "../../assests/data/dummy-tickets.json";
import {Container,Row,Col,Button} from "react-bootstrap"
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/updatet-ticket/UpdateTicket.comp";
import { useEffect, useState } from "react";

export const Ticket = () => {
    const ticket = tickets[0]
    const [message,setMessage] = useState('')

    useEffect(()=>{
        
    },[message])

    const handleOnChange = (e) =>{
        setMessage(e.target.value)
    }
    
    const handleOnSubmit = () =>{
        alert('Form Submitted')
    }

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadCrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolcer text-secondary">
                <div className="subject">{ticket.subject}</div>
                <div className="date">{ticket.addedAt}</div>
                <div className="status">{ticket.status}</div>
                </Col>
                <Col>
                <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}