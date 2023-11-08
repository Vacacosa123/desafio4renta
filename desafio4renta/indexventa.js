const propiedadenventa = [
    {
        nombre: 'Estupenda casa frente a la playa nudista',
        src: 'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
        descripcion: 'Una casa soñada para ser libre',
        ubicacion: 'Algun lugar',
        habitaciones:10,
        baños: 15,
        costo: 100,
       
    },
    {
        nombre: 'Casa hotel regia para vacaciones',
        src: 'https://casaatacamahotel.redhotelera.cl/usuario/uploads/image/casa-atacama/1612959-min.jpg',
        descripcion: 'Casa en el desierto para ser la reina',
        ubicacion: 'Atacama',
        habitaciones:4,
        baños: 4,
        costo: 178654,
        
    },
    {
        nombre: 'Casa en viña',
        src: 'https://http2.mlstatic.com/D_NQ_NP_905660-MLC49654350520_042022-O.webp',
        descripcion: 'Hermosa casa en viña, vista al mar, oerfecta para vacacionar',
        ubicacion: 'Viña del Mar',
        habitaciones:3,
        baños: 2,
        costo: 205000000,
        
    },
    {
        nombre: 'Apartamento en londres',
        src: 'https://theportablewife.com/wp-content/uploads/find-a-flat-london-neighborhood.jpg',
        descripcion: 'Departamento en londres para ser chic',
        ubicacion: 'Londres',
        habitaciones:2,
        baños: 2,
        costo: 147850000,
        
    },
]


    function verProductos(propiedades){
   console.log("prueba");
 const propiedadNueva = document.getElementById('tarjetacontenedor')
 propiedadNueva.innerHTML = '';

 propiedades.forEach(propiedad=> {
    propiedadNueva.innerHTML+= `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedad.nombre}
        </h5>
        <p class="card-text">
          ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
          <i class="fas fa-bath"></i> ${propiedad.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
     
      </div>
    </div>
  </div>
  `;
   
  });

}
verProductos(propiedadenventa);