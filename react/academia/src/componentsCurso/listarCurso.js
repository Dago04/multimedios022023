import React from 'react';

class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            datosCargados : false,
            datosCursos:[],
        }
    }

    cargarDatos(){        
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {
            this.setState({datosCargados:true,  datosCursos:datosrepuesta.data})
            console.log(datosrepuesta.data);
        })
        .catch(console.log)//muestra errores
    }

    componentDidMount(){
        this.cargarDatos();
    }
   
    render() { 
        const { datosCargados, datosCursos } =this.state
        return ( 
            <div className='container'>
                <h1>Listar Curso</h1>
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
                           
                         }
                        </tbody>
                    </table>
                </div>
                
            </div>
         );
    }
}
 
export default ListarCurso;