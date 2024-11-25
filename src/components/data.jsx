const Datalist = () =>{
    let Allclient = [
        { client:"Telekitty", mawb:123456789000, hawb:123456789000, date:"10 oct 2024"},
        { client:"Fast Company", mawb:123456789000, hawb:123456789000, date:"11 Mar 2024"},
        { client:"Off-Grid", mawb:123456789000, hawb:123456789000, date:"22 Sep 2024"},
        { client:"Figma", mawb:123456789000, hawb:123456789000, date:"18 Jul 2024"},
        { client:"Fast Company", mawb:123456789000, hawb:123456789000, date:"6 April 2024"},
        { client:"Telekitty", mawb:123456789000, hawb:123456789000, date:"10 oct 2024"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"31 May 2024"},
        { client:"Fast Company", mawb:123456789000, hawb:123456789000, date:"22 June 2024"},
        { client:"Off-Grid", mawb:123456789000, hawb:123456789000, date:"10 Feb 2024"},
        { client:"Telekitty", mawb:123456789000, hawb:123456789000, date:"14 Aug 2024"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},  
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
        { client:"Nucleo", mawb:123456789000, hawb:123456789000, date:"5 oct 2023"},
    ];
    return(
        <section>
            <h3> {Allclient.length} Clients</h3>            
            <table id="grid">
                <thead>
                    <tr id="one">
                        <th> Reference No. </th>
                        <th> Client </th>
                        <th> MAWB No. </th>
                        <th> HAWB No. </th>
                        <th> Created Date </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Allclient.map((client, index)=>{
                            return(
                                <tr key={client} id="two">
                                    <td> <input type="checkbox"/> {index} </td>
                                    <td> {client.client} </td>
                                    <td> {client.mawb} </td>
                                    <td> {client.hawb} </td>
                                    <td> {client.date} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Datalist;

// const Allbook = () =>{
//     return(
//         <section>
//             <h1> ALl Book Is Working</h1>
//         </section>
//     )
// }

// export default Allbook;