import { TicketTable } from "../../components/ticket-tabel/TicketTable.comp";
import{Container,Row,Col,Button} from "react-bootstrap";
import tickets from "../../assests/data/dummy-tickets.json";
import { PageBreadCrumb } from "../../components/breadcrumb/Breadcrumb.comp";

export const Dashboard = () =>{
    return(
        <Container>
            <Row>
        <Col>
          <PageBreadCrumb page="Dashboard" />
        </Col>
      </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button variant="info" style={{ fontSize: '2rem', padding: '10px 30px' }}>Add new Ticket</Button>
          </Col>
        </Row>
        <Row>
            <Col className="text-center mb-2">
            <div>Total Tickets : 50</div>
            <div>Pending Tickets : 5</div>
            </Col>
        </Row>
        <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
      </Container>
      
    )
}

