import {Header } from "./partials/Header.comp"
import {Footer } from "./partials/Footer.comp"

export const DefaultLayout = ({childern}) =>{

     return(
        <div className="default-layout">
            <header className="header">
                <Header/>
            </header>
            <main className="main">

            </main>
            <footer className="footer">
             <Footer/>
            </footer>
        </div>
     )

}