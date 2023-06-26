import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





class ListarGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosGrupos: [],
            modalOpen: false,
            nombre: "",
            id: ""
          
        }
    }

    cargarDatos() {
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                this.setState({ datosCargados: true, datosGrupos: datosrepuesta.data })
                console.log(datosrepuesta.data);
            })
            .catch(console.log)//muestra errores
    }
    eliminar(id) {
        console.log(id);
        var datosenviar = {
            id: id
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })
            .then(respuesta => respuesta.json())
            .then((datosrepuesta) => {

                alert('Grupo Eliminado');
                window.location = 'ListarGrupos';
                console.log('Datos', datosrepuesta)
            })
            .catch(console.log)

    }

    editar(objeto) {
        console.log(objeto);
        this.setState({nombre: objeto.nombre,id:objeto.id})
        this.openModal();
    }
 
    enviarDatos = (e) =>{
        e.preventDefault();

        const { nombre,id } = this.state;

        var datosenviar = {
            id: id,
            nombre: nombre
        }

        console.log(datosenviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
            {
                method:"POST",
                body:JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {            
                
                window.location = 'ListarGrupos'
            })
            .catch(console.log)//muestra errores
    }
    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    openModal() {
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    componentDidMount() {
        this.cargarDatos();
    }





    render() {
        const { datosCargados, datosGrupos, modalOpen, nombre,id} = this.state
        return (
            <div className='container p-5'>


                <Modal show={modalOpen} >
                    <Modal.Header >
                        <Modal.Title>Modal Grupos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formulario" onSubmit={this.enviarDatos} >
                            <div className="mb-3">
                                <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id} ></input>
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" required className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingrese su nombre" onChange={this.cambioValor} value={nombre} ></input>

                            </div>
                          
                            <div className="mb-3">
                                <button type="reset" className="btn btn-secondary me-2" onClick={() => this.closeModal()}>Close</button>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>

                    </Modal.Body>

                </Modal>

             

                <h2 className='p-3'>Lista Grupos</h2>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datosGrupos.map(
                                    (datosExtraidos) => (

                                        <tr key={datosExtraidos.id} className="table-primary table-striped" >
                                            <td scope="row">{datosExtraidos.id}</td>
                                            <td>{datosExtraidos.nombre}</td>
                                            <td>
                                                <a name="" id="" className="btn btn-danger mx-3 " onClick={() => this.eliminar(datosExtraidos.id)} role="button">Eliminar</a>
                                                ||
                                                <a name="" id="" className="btn btn-primary mx-3 " onClick={() => this.editar(datosExtraidos)} role="button">Editar</a>

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

export default ListarGrupo;
