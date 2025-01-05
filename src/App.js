import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { AddTicket } from './page/new-ticket/AddTicketPage';
import { TicketList } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/Ticket.page';

//import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
      {/* <Dashboard/> */}
                <Ticket/>
      </DefaultLayout>
     
    </div>
  );
}

export default App;
