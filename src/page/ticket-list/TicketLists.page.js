import { Container,Row,Col,Button } from "react-bootstrap"
import { SearchForm } from "../../components/search-form/SearchForm.Comp"
import { useEffect, useState } from "react"
import tickets from "../../assests/data/dummy-tickets.json";
import { TicketTable } from "../../components/ticket-tabel/TicketTable.comp";
import { PageBreadCrumb } from "../../components/breadcrumb/Breadcrumb.comp";

export const TicketList= () =>{

            const [str , setStr] = useState('')
            const [ displayTicket , setDisplayTicket] = useState([])

            useEffect(()=>{

            },[str,displayTicket])

            const handleOnChange = (e) => {
                setStr(e.target.value)
                searchTicket(e.target.value)
            }
            const searchTicket = (str) => {
                console.log('Search value:', str, 'Type:', typeof str);

                if (typeof str !== 'string') {
                    console.error('The search value must be a string');
                    return;

                }
                const displayTicket = tickets.filter(row => 
                    row.subject.toLowerCase().includes(str.toLowerCase())
                );
                setDisplayTicket(displayTicket);
            };

    return(
 <Container className="mt-4">
    <Row>
        <Col>
        <PageBreadCrumb page ="Ticket"/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Button variant="info">Add New Tickets</Button>
        </Col>
        <Col className="text-right">
        <SearchForm str={str} handleOnChange={handleOnChange}/></Col>
        <Row className="mt-4">
        <Col>
        <TicketTable tickets={displayTicket}/>
        </Col>
        </Row>
    </Row>
 </Container>
    )
}