import React from 'react';
class CrearCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            descripcion: "",
            tiempo: "",
            datosCargados: false,
        }
    }

    enviarDatos = (e) =>{
        e.preventDefault();

        const { nombre, descripcion, tiempo } = this.state;

        var datosenviar = {
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo,
            usuario:'Dagoberto' 
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
            {
                method:"POST",
                body:JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {            
                console.log('Datos',datosrepuesta)
                window.location = 'ListarCursos'
            })
            .catch(console.log)//muestra errores
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    render() {
        const { nombre, descripcion, tiempo, datosCargados } = this.state;

        return (
            <div className='text-start container p-5'>
                <form id="formulario" onSubmit={this.enviarDatos}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" required className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingrese su nombre" onChange={this.cambioValor} value={nombre}></input>
                        <small id="helpId" className="form-text text-muted">Ingrese su nombre</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <input type="text" required className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Ingrese su descripcion" onChange={this.cambioValor} value={descripcion}></input>
                        <small id="helpId" className="form-text text-muted">Ingrese su descripcion</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tiempo" className="form-label">Tiempo</label>
                        <input type="text" required className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo" onChange={this.cambioValor} value={tiempo}></input>
                        <small id="helpId" className="form-text text-muted">Ingrese el tiempo</small>
                    </div>
                    <div className="mb-3">
                        <button type="reset" className="btn btn-danger">Reset</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrearCurso;
