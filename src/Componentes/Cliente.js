import { Component } from "react";

import JsonData from '../data/productosPrueba.json'

function Table({theadData, tbodyData}) {
    return (
        <table>
            <thead>
                <tr>
                {theadData.map(heading => {
                return <th key={heading}>{heading}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index}>
                        {theadData.map((key, index) => {
                            return <td key={row[key]}>{row[key]}</td>
                            
                            
                        })}
                        
                        <button>Comprar</button>
            
                </tr>;
                })}
            </tbody>
        </table>
    );
    }

    export default function Cliente() {
    
    const getHeadings = () => {
        return Object.keys(JsonData[0]);
    }
    return (
        
        <div className="container">
        <h3>Productos Tienda Web</h3>
        <br></br>
        <Table theadData={getHeadings()} tbodyData={JsonData}/>
        </div>
    );
    }

      

/* export  default function Cliente() {

    return (
        <>
            <br></br>
            <h3>Productos Tienda Web</h3>
            <div >
                <Table heading={heading} body={body} />
            </div>
        </>
    );

}

class Table extends Component {
    render() {

       //Vector y formatearlos para que react los conozca y los trate coomo un map
       //Map Coleecion no lineal

        var heading = this.props.heading;
        var body = this.props.body;
        
        return (
            <div id="datagrid">
                <table>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}

                    
                </tbody>
            </table>
            


            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}
*/