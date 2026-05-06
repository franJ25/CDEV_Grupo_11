// Crear la escena
const escena = new THREE.Scene();
escena.background = new THREE.Color(0x00ff00); // Verde

// Cámara del tamaño de la pantalla
const camara = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camara.position.z = 20;

// Renderizador
const renderizador = new THREE.WebGLRenderer({
  canvas: document.querySelector("#miCanvas"),
  antialias: true
});
renderizador.setSize(window.innerWidth, window.innerHeight);

// Agregar una luz Direccional
const luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(5, 5, 5);
escena.add(luz);

// Crear geometría y material para el cubo gris
const geometriaCubo = new THREE.BoxGeometry(1, 1, 1);
const materialCubo = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Rojo
const cubo = new THREE.Mesh(geometriaCubo, materialCubo);
escena.add(cubo);



// Animación 
function animar() {
  requestAnimationFrame(animar); 

  // Hacer girar el cubo
  // cubo.rotation.x += 0.01;
  // cubo.rotation.y += 0.01;

  // Mover con WASD
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        cubo.position.y += 0.001; // Mover hacia adelante
        break;
      case "s":
        cubo.position.y -= 0.001; // Mover hacia atrás
        break;
      case "a":
        cubo.position.x -= 0.001; // Mover hacia la izquierda
        break;
      case "d":
        cubo.position.x += 0.001; // Mover hacia la derecha
        break;
    }
  });

  // Llamado al renderizador
  renderizador.render(escena, camara);
}
animar();
