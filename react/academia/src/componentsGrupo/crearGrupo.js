import React from 'react';
class CrearGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            datosCargados: false,
        }
    }

    

    enviarDatos = (e) =>{
        e.preventDefault();

        const { nombre } = this.state;

        var datosenviar = {

            nombre: nombre 
        }

        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
            {
                method:"POST",
                body:JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {            
                console.log('Datos',datosrepuesta)
                window.location = 'ListarGrupos'
            })
            .catch(console.log)//muestra errores
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    render() {
        const { nombre, datosCargados } = this.state;

        return (
            <div className='text-start container p-5'>
                 <h3 className='p-3 text-center'>Registro Grupo</h3>
                <form id="formulario" onSubmit={this.enviarDatos}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" required className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingrese su nombre" onChange={this.cambioValor} value={nombre}></input>
                        <small id="helpId" className="form-text text-muted">Ingrese su nombre</small>
                    </div>
                
                    <div className="mb-3">
                        <button className="btn btn-danger me-3" >Reset</button>
                        
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CrearGrupo;
