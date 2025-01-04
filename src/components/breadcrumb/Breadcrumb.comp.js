import { Breadcrumb } from "react-bootstrap";

export const PageBreadCrumb = ({ page }) =>{
    return(
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home/</Breadcrumb.Item>
        <Breadcrumb active>{page}</Breadcrumb>
        </Breadcrumb>
    )
}