import { Component } from "react";


var heading = ['Id Producto', 'Nombre Producto','Descripcion Producto', 'Valor Unitario'];

//var body = conexion a un BD NOsq o sql o un arcgivo plano

var body =
    [
    ['PI-0001', 'Guantes', 'Unidades dependiendo de tallas','36'],
    ['PI-0002', 'Barrilla', 'TAmaños de 6 metros y define las pulagas','40'],
    ['PI-0003', 'Brea','Brea sintetica por 6 kg', '56'],
 
    ];


export function ListaVentas() {

    return (

        <>
        <div class="container-fluid col-6 col-md-6 pt-3 ps-4 bg-success bg-opacity-85 text-white border border-start-0 fst-italic">
           
            <h3>ListaVentas</h3>
            <hr></hr>
            <br></br>
            <div >
                <Table heading={heading} body={body} />
            </div>
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