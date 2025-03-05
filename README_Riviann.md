Alumno: Riviann de Andrade dos Santos

Descripción de las tareas realizadas: 
  Dentro de mi plataforma en GitHub he creado el repositorio remoto en el que iriamos trabajar (proyecto-Git) y después he añandido como colaboradores Jianuo y Jorge. el repositorio al principio tenia las carpetas css y js (JavaScript) vacias y el index.html tambien vacio. en la división, yo me quedé con el css, Jorge con el html y Jianuo con el JavaScript, pero al decorrer del proyecto hemos tenido que cambiar cosas en las otras partes con el consentimiento de todos. En mi parte, había esperado a que Jorge hiciera su parte en html y solo después empecé con el css. La maquetación inicial la tenia hecha en mi rama llamada Rama-Riviann, pero al final, imagino que por probemas en mi portatil, he tenido que borrar la rama y crear otra (Rama_Riviann), en esta hice toda la otra parte. En el dia siguiente, hemos cambiado y añandido más cosas y esto resulto en otros problemas que los voy a detallar más abajo. Puedo parecer que uno ha hecho más que el otro pero lo que se hizo por último se debe a los problemas que he tenido. Al final del proyecto, hemos creado una página web donde se explica cual el es objetico de la tarea final y un botón donde se puede cambiar el color del fonde del navegador, un reloj digital y una calculadora. La calculadora, fue para mi lo más complicadoy no la he podido maquetar como imaginaba.

Comandos de Git utilizados:

git init --> desde mi portatil para crear el repositorio local.
git pull origin master --> desde el repositorio local que he creado en mi portatil.
git checkout -b Riviann_Rama --> Para crear mi rama.
git add . --> para añandir a stage los cambios hechos.
git commit -m " " --> para hacer los commits.
git push https://github.com/Riviann78/Proyecto-Git.git --> para subir los commits al repositorio remoto.
git status --> para saber lo que había en stage y los commits
git branch --> para saber que ramas habian.
git checkout master; git checkout Rama_Riviann --> cambio de rema.
git reset --hard HEAD~1 --> para deshacer el commit anterior.
git log --> para el historial de commits.

Problemas encontrados y cómo se resolvieron: 
  El principal problema encontrado fue acerca del merge y pull request. A la hora de hacer el pull requests en un dado momento habia un conflicto entre la rama master y la Rama_Riviann, como solución he borrado los conflictos que habian el en proprio GitHub en un apartado donde se permitia borrar los conflictos. También he tenido un problema con mi rama, cuando se hacia algun cambio en el css y se usaba el git add . por algún motivo que no he descubierto, no se guardaban los cambios en stage, he buscado mucho la razón pero no encontré. Al final he tenido que borrar mi ramma en el repositorio remoto y crear otra desde mi repositorio remoto.
