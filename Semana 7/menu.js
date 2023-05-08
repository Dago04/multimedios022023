var contenidoMenuResultado = document.querySelector("#navbarID");

contenidoMenuResultado.innerHTML +=`<nav class="navbar navbar-expand-md navbar-dark bg-dark ">
<div class="container-fluid">
  <!--icono-->
  <a class="navbar-brand" href="Index.html">
    <i class="bi bi-cup-hot-fill"></i>
    <span class="text-warning">Tearlament</span>
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#menu"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="menu">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a class="nav-link active" href="Index.html">Inicio</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          href="#"
          >Listas</a
        >
        <ul class="dropdown-menu bg-secondary">
          <li>
            <a class="dropdown-item" href="ListaEstudiante.html"
              >Ver Estudiantes</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="ListaProfesores.html"
              >Ver Profesores</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="ListaCurso.html"
              >Ver Cursos</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="ListaGrupo.html"
              >Ver Grupos</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="ListaUsuarios.html"
              >Ver Usuario</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="ListaEstudiantesGrupo.html"
              >Ver Estudiantes por grupo</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="ListaProfesoresGrupo.html"
              >Ver Profesores por grupo</a
            >
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          href="#"
          >Registro</a
        >
        <ul class="dropdown-menu bg-secondary">
          <li>
            <a class="dropdown-item" href="crearEstudiante.html"
              >Insertar Estudiante</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="crearProfesores.html"
              >Insertar Profesor</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="crearCurso.html"
              >Insertar Curso</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="crearGrupo.html"
              >Insertar Grupo</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="crearUsuarios.html"
              >Insertar Usuario</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <hr class="text-white-50" />
    <!--Enlaces redes sociales-->
    <ul class="text-light navbar-nav flex-row flex-wrap">
      <li class="nav-item col-6 col-md auto p-3">
        <i class="bi bi-github"></i>
        <small class="text-warning d-md-none ms-2"> Github</small>
      </li>
      <li class="nav-item col-6 col-md auto p-3">
        <i class="bi bi-instagram"></i>
        <small class="text-warning d-md-none ms-2"> Instagram</small>
      </li>
      <li class="nav-item col-6 col-md auto p-3">
        <i class="bi bi-whatsapp"></i>
        <small class="text-warning d-md-none ms-2"> Whatsapp</small>
      </li>
      <li class="nav-item col-6 col-md auto p-3">
        <i class="bi bi-envelope"></i>
        <small class="text-warning d-md-none ms-2">
          Correo Electronico</small
        >
      </li>
    </ul>
  </div>
</div>
</nav>  

`;