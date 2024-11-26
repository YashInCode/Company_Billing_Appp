import { faBell, faFileInvoice, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTable, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Datalist from "./data";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css"
import NewJob from "./new job";
import { useState } from "react";

const Myclient = () => {
    const [newJob, setnewJob] = useState(false)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2" id="side">
                    <h1 className="mt-5 text-center text-light"> BMS </h1>
                    <p className="ms-3 text-light mt-4">
                        {/* <FontAwesomeIcon icon={faTable} className="font" /> Dashboard */}
                        <Link to="/dashboard" className="toplink"><FontAwesomeIcon icon={faTable} className="font" /> Dashboard</Link>
                    </p>
                    <p className="ms-3 text-light mt-4">
                        <Link to="/client" className="toplink"><FontAwesomeIcon icon={faUsers} className="font" /> CRM </Link>
                    </p>
                    <p className="ms-3 text-light mt-4">
                        <Link to="/invoice" className="toplink"><FontAwesomeIcon icon={faFileInvoice} className="font" />  Invoice </Link>
                    </p>
                </div>
                <div className="col-xl-10" id="backcolor">
                    <header id="head">
                        <FontAwesomeIcon icon={faBell} />
                    </header>
                    <nav id="navigation">
                    <h4 className="mt-3"> Jobs/Docket </h4>
                    <div >
                    <button className=" btn btn-primary rounded" onClick={()=>setnewJob(true)}> <FontAwesomeIcon icon={faPlus} /> Create Invoice </button>
                    {newJob && <NewJob onClose={()=>setnewJob(false)}/>}
                    <button className=" btn btn-secondary rounded"> <FontAwesomeIcon icon={faPlus} /> Download </button>
                    
                    </div>
                    </nav>
                    <section className="bg-light">
                        
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Myclient;

// const Allbook = () =>{
//     return(
//         <section>
//             <h1> ALl Book Is Working</h1>
//         </section>
//     )
// }

// export default Allbook;