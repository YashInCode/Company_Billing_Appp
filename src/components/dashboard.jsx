import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faTable, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myclient from "./client";

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2" id="side">
                    <h1 className="mt-5 text-center text-light"> BMS </h1>
                    <p className="ms-3 text-light mt-4">
                        <FontAwesomeIcon icon={faTable} className="font" /> Dashboard
                    </p>
                    <p className="ms-3 text-light mt-4">
                        <Link to="/client" className="toplink"><FontAwesomeIcon icon={faUsers} className="font" /> Clients </Link>
                    </p>
                </div>
                <div className="col-xl-10" id="backcolor">
                    <header id="head">
                        <FontAwesomeIcon icon={faBell} />
                    </header>
                    
                </div>
            </div> 
        </div>
    )
}

export default Dashboard;

// const Allbook = () =>{
//     return(
//         <section>
//             <h1> ALl Book Is Working</h1>
//         </section>
//     )
// }

// export default Allbook;