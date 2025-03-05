Jorge Cascón Vicente
 1. Configuración inicial del proyecto (Responsable líder del proyecto).
  a.	Crear repositorio local con: 
  git init
  b.	Crear los archivos y carpetas con: 
  mkdir css javascript 
  touch index.html css/estilos.css javascript/mijava.js README.md
  c.	Añadir archivos a área de preparación y primer commit:
  git add .
  git commit -m “Primer comit inicial”
2.	Crear repositorio remoto en GitHub (Responsable líder del proyecto).
  a.	Crear repositorio en GitHub.
  b.	Conectar repositorio local a GitHub con:
  git remote add origin URL_DEL_REPOSITORIO
  git branch -M master
  c.	Subir proyecto a repositorio remoto con: 
  git push -u origin master
3.	Agregar colaboradores y crear rama propia para trabajar en ella (Todos).
  a.	Aceptar la invitación de colaborador en GitHub.
  b.	Clonar el repositorio en su máquina con:
  git clone URL_DEL_REPOSITORIO
  cd NOMBRE_DEL_REPOSITORIO
  c.	Crear nueva rama con su nombre con:
  git checkout -b nombre-del-colaborador
  d.	Realizar la tarea asignada, guardar los cambios y documentarlo con commits:
  git add .
  git commit -m "Descripción detallada del cambio realizado"
  e.	Subir los cambios en su rama de GitHub:
  git push -u origin nombre-del-colaborador
4.	Integración del proyecto (Todos).
  a.	Abrir Pull Request en GitHub y fusionar su rama con la master, agregar título y descripción y enviarlo para la revisión.
  b.	Aprobar los PR de los compañeros y fusionar la rama con master.
  c.	Resolver conflictos manualmente y luego añadirlo y hacer un commit con:
  git add .
  git commit -m "Conflicto resuelto en archivo X"
  git push
5.	Completar archivo README.md con nombre, explicación del trabajo, comandos Git utilizados y los problemas y soluciones (Todos).
