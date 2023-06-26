import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosCursos: [],
            modalOpen: false,
            nombre: "",
            descripcion: "",
            tiempo: "",
            id: "",
            usuario: ""
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
    eliminar(id) {
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
                window.location = 'ListarCursos';
                console.log('Datos', datosrepuesta)
            })
            .catch(console.log)

    }

    editar(objeto) {
        console.log(objeto);
        this.setState({nombre: objeto.nombre, descripcion :objeto.descripcion, tiempo: objeto.tiempo,id:objeto.id, usuario:objeto.usuario})
        this.openModal();
    }
 
    enviarDatos = (e) =>{
        e.preventDefault();

        const { nombre, descripcion, tiempo,id, usuario } = this.state;

        var datosenviar = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo,
            usuario: usuario 
        }

        console.log(datosenviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
            {
                method:"POST",
                body:JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {            
                
                window.location = 'ListarCursos'
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
        const { datosCargados, datosCursos, modalOpen, nombre, descripcion, tiempo,id,  usuario} = this.state
        return (
            <div className='container p-5'>


                <Modal show={modalOpen} >
                    <Modal.Header >
                        <Modal.Title>Modal Cursos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formulario" onSubmit={this.enviarDatos} >
                            <div className="mb-3">
                                <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id} ></input>
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" required className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingrese su nombre" onChange={this.cambioValor} value={nombre} ></input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                                <input type="text" required className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Ingrese su descripcion" onChange={this.cambioValor} value={descripcion}></input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="tiempo" className="form-label">Tiempo</label>
                                <input type="text" required className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo" onChange={this.cambioValor} value={tiempo}></input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="usuario" className="form-label">Usuario</label>
                                <input type="text" required className="form-control" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Ingrese el usuario" onChange={this.cambioValor} value={usuario}></input>

                            </div>
                            <div className="mb-3">
                                <button type="reset" className="btn btn-secondary me-2" onClick={() => this.closeModal()}>Close</button>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>

                    </Modal.Body>

                </Modal>

             

                <h3 className='p-3 '>Lista Cursos</h3>
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
                                                <a name="" id="" className="btn btn-danger mx-2 " onClick={() => this.eliminar(datosExtraidos.id)} role="button">Eliminar</a>
                                                ||
                                                <a name="" id="" className="btn btn-primary mx-2" onClick={() => this.editar(datosExtraidos)} role="button">Editar</a>

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

