import {Header } from "./partials/Header.comp"
import {Footer } from "./partials/Footer.comp"
import { Dashboard } from "../page/dashboard/Dashboard.page"

export const DefaultLayout = ({children}) =>{

     return(
        <div className="default-layout">
            <header className="header">
                <Header/>
            </header>
            <main className="main">
        {children} {/* This renders the children */}
      </main>
            <footer className="footer">
             <Footer/>
            </footer>
        </div>
     )

}