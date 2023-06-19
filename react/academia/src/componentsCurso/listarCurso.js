import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosCursos: [],
            modalOpen: false
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
        var datosenviar = {
            id: id
          }
    
          fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
            {
              method: "POST",
              body: JSON.stringify(datosenviar)
            })
            .then(respuesta => respuesta.json())
            .then((datosrepuesta) => {
                
                 alert('Curso Eliminado');
                 window.location ='ListarCursos';
              console.log('Datos', datosrepuesta)
            })
            .catch(console.log)
       
    }

    editar(objeto){
        console.log(objeto);
    }

    openModal(){
        this.setState({modalOpen:true});
    }

    closeModal(){
        this.setState({modalOpen:false});
    }

    componentDidMount() {
        this.cargarDatos();
    }


    


    render() {
        const { datosCargados, datosCursos, modalOpen } = this.state
        return (
            <div className='container p-5'>
                <Button variant="primary" onClick={() => this.openModal()} >
                        Launch demo modal
                    </Button>

                    <Modal show={modalOpen} >
                        <Modal.Header >
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.closeModal()}>
                            Close
                        </Button>
                        <Button variant="primary" >
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
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

