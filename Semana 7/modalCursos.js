var contenidoMenuResultado = document.querySelector("#modalCursos");
contenidoMenuResultado.innerHTML +=` <div class="modal fade " id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="modalTitleId">Modulo Cursos</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form id="formulario">
        <div class="mb-3">
          <label for="" class="form-label">Nombre</label>
          <input type="text" class="form-control" name="nombre" id="nombre" aria-describedby="helpId"
            placeholder="Ingresa el nombre del curso" />
          <small id="helpId" class="form-text text-muted">Nomber aca</small>
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Descripcion</label>
          <input type="text" class="form-control" name="descripcion" id="descripcion" aria-describedby="helpId"
            placeholder="Ingresa ela descripcion del curso" />
          <small id="helpId" class="form-text text-muted">Descripcion aca</small>
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Tiempo</label>
          <input type="text" class="form-control" name="tiempo" id="tiempo" aria-describedby="helpId"
            placeholder="Ingresa el tiempo del curso" />
          <small id="helpId" class="form-text text-muted">Tiempo aca</small>
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Usuario</label>
          <input type="text" class="form-control" name="usuario" id="usuario" aria-describedby="helpId"
            placeholder="Ingresa el tiempo del curso" />
          <small id="helpId" class="form-text text-muted">Usuario aca</small>
        </div>
      </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
        Cerrar
      </button>
      <button type="submit" onclick="" class="btn btn-primary">Guardar</button>
    </div>
  </div>
</div>
</div>`