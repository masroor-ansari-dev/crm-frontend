import {Table} from "react-bootstrap";

export const TicketTable = ({tickets}) =>{
    console.log('Tickets:', tickets); // Ensure this logs your data
    return(
        <Table hover bordered striped>
            <thead>
                <tr>
                    <th>Ticket Id</th>
                    <th>Subject</th>
                    <th>status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
  {tickets.length > 0 ? (
    tickets.map((curTicket) => (
      <tr key={curTicket.id}>
        <td>{curTicket.id}</td>
        <td>{curTicket.subject}</td>
        <td>{curTicket.status}</td>
        <td>{curTicket.addedAt}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center">
        No Tickets to Show
      </td>
    </tr>
  )}
</tbody>
        </Table>
    )
}


