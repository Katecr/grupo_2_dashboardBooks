import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.nameBook}</td>
                    <td>{props.price}</td>
                    <td>{props.languageBook}</td>
                    <td>{props.pages} </td>
                    <td>{props.descriptionBook}</td>
                </tr>
            )
    }
    
        

export default ChartRow;