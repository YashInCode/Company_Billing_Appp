import { faX } from "@fortawesome/free-solid-svg-icons";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewJob = ({onClose}) =>{
  

    return(
        <section id="back">
      <div id="popup" >
        <div id="nav">
        <h3> Add New Job/Docket </h3>
        <button id="remove" onClick={onClose}> <FontAwesomeIcon icon={faX} /></button>
        </div>
        <table className="input">
            <tr>
                <th colSpan={3}>
                <h5 className="heading"> Job/Docket Details </h5>
                </th>
            </tr>
            <tr>
                <td>
                    Freight Type <br/> <input type="text" className="form-control" />
                </td>
                <td> 
                    Client Name <br/> <input type="text" className="form-control"/>
                </td>
                <td>
                    Contact Number <br/> <input type="number" className="form-control"/>
                </td>
            </tr>
        </table>
        <table className="input">
            <h5 className="heading"> Fright Details </h5> 
            <tr>
                <td>
                    MAWB Number <br/> <input type="text" className="form-control" />
                </td>
                <td> 
                    AWB Number <br/> <input type="text" className="form-control"/>
                </td>
                <td>
                    BE/SB Number <br/> <input type="number" className="form-control"/>
                </td>
            </tr>
            <tr>
                <td>
                BE/SB Date <br/> <input type="text" className="form-control" />
                </td>
                <td> 
                    ACIF Value <br/> <input type="text" className="form-control"/>
                </td>
                <td>
                    Supplier/Consignee <br/> <input type="number" className="form-control"/>
                </td>
            </tr>
            <tr>
                <td>
                    Nature Of Goods (NOG) <br/> <input type="text" className="form-control" />
                </td>
                <td> 
                    Total Boxes <br/> <input type="text" className="form-control"/>
                </td>
                <td>
                Chargeable Weight <br/> <input type="number" className="form-control"/>
                </td>
            </tr>
            <tr>
                <td>
                    Customer Invoice Number <br/> <input type="text" className="form-control"/>
                </td>
            </tr>
        </table>
      </div>
      </section>
    )
}


export default NewJob;