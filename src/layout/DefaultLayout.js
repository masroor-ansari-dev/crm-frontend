import {Header } from "./partials/Header.comp"
import {Footer } from "./partials/Footer.comp"
import { Dashboard } from "../page/dashboard/Dashboard.page"

export const DefaultLayout = ({childern}) =>{

     return(
        <div className="default-layout">
            <header className="header">
                <Header/>
            </header>
            <main className="main">
            <Dashboard/>
            </main>
            <footer className="footer">
             <Footer/>
            </footer>
        </div>
     )

}