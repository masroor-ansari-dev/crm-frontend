import {Container ,Row , Col} from "react-bootstrap"
import { PageBreadCrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp"
import {useState,useEffect} from "react"
import { shortText } from "../../utils/validation"


const initialFrmData = {
    subject :"",
    issueDate : "",
    issueDetails :""
}

const initialFrmDataError = {
    subject :false,
    issueDate : false,
    issueDetails :false
}
export const AddTicket = () =>{

   
    const[frmData,setFrmData] = useState(initialFrmData)
    const[frmDataError,setFrmDataError] = useState(initialFrmDataError)
    useEffect(()=>{

    },[frmData])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        // Only update the relevant field while keeping the rest intact
        setFrmData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleOnSubmit = async(e) =>{
        e.preventDefault();
            
        setFrmDataError(initialFrmDataError)
        
        const isSubjectValid = await shortText(frmData.subject)

          setFrmDataError({
           ...initialFrmDataError,
           subject:!isSubjectValid
        })
        console.log("form submitted",frmData)
    }
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadCrumb page="New Ticket"/>
                </Col>
            </Row>
              <Row>
              <Col>
            <AddTicketForm frmData={frmData} frmDataError={frmDataError} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
            </Col>
              </Row>
            
        </Container>
    )
}