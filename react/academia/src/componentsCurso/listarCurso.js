import React from 'react';



class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosCursos: [],
        }
    }

    cargarDatos() {
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                this.setState({ datosCargados: true, datosCursos: datosrepuesta.data })
                console.log(datosrepuesta.data);
            })
            .catch(console.log)//muestra errores
    }
    eliminar(id){
        console.log(id);

       
    }

    editar(objeto){
        console.log(objeto);
    }

    componentDidMount() {
        this.cargarDatos();
    }


    render() {
        const { datosCargados, datosCursos } = this.state
        return (
            <div className='container p-5'>
                <h1 className='p-3'>Listar Curso</h1>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Tiempo</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datosCursos.map(
                                    (datosExtraidos) => (

                                        <tr key={datosExtraidos.id} className="table-primary table-striped" >
                                            <td scope="row">{datosExtraidos.id}</td>
                                            <td>{datosExtraidos.nombre}</td>
                                            <td>{datosExtraidos.descripcion}</td>
                                            <td>{datosExtraidos.tiempo}</td>
                                            <td>{datosExtraidos.usuario}</td>
                                            <td>
                                                <a name="" id="" className="btn btn-danger mx-2" onClick={()=>this.eliminar(datosExtraidos.id)} role="button">Eliminar</a>
                                                ||
                                                <a name="" id="" className="btn btn-primary mx-2" onClick={()=>this.editar(datosExtraidos)} role="button">Editar</a>
                                                
                                            </td>

                                        </tr>
                                )
                            )
                         }
                        </tbody>
                    </table>
                </div>
                
            </div>
         );
    }
}
 
export default ListarCurso;