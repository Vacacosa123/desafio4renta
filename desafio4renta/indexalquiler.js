const propiedadesAlquiler = [
    {
        nombre: 'Casita hermosa de dulce',
        src: 'https://www.recetasnestle.cl/sites/default/files/2022-11/casita-de-jengibre-decorada-diferentes-dulces.jpg',
        descripcion: 'Una casita de dulce donde murio Hansel y Gretel',
        ubicacion: 'Sweetland',
        habitaciones:1,
        baños: 2,
        costo: 100,
        smoke: false,
        pets: true,

    },
    {
        nombre: 'Casa en viña',
        src: 'https://http2.mlstatic.com/D_NQ_NP_905660-MLC49654350520_042022-O.webp',
        descripcion: 'Hermosa casa en viña, vista al mar, oerfecta para vacacionar',
        ubicacion: 'Viña del Mar',
        habitaciones:3,
        baños: 2,
        costo: 250000,
        smoke: true,
        pets: false,

    },
    {
        nombre: 'Casa en el bosque',
        src: 'https://images.adsttc.com/media/images/5b85/3575/f197/ccae/d200/0019/large_jpg/33_BESONIAS_ALMEIDA-CASA-BOSQUE-PH_FEDERICO_KULEKDJIAN.jpg?1535456620',
        descripcion: 'Casita en el bosque para pasarlo estupendo',
        ubicacion: 'Bosque de los sueños',
        habitaciones:5,
        baños: 4,
        costo: 300,
        smoke: false,
        pets: false,

    },
    {
        nombre: 'Casita en la playa y todo eso',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/420999972.jpg?k=613f941416b6dc7635f9dd3aa88a828fdf887ba25d6a5073120f58ad03c046cf&o=&hp=1',
        descripcion: 'Casita de bronceo para ser una barbie',
        ubicacion: 'Costa este',
        habitaciones:2,
        baños: 2,
        costo: 25000,
        smoke: true,
        pets: true,

    },
];




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
        <p class="text-danger">
          <i class="fas fa-smoking-ban"></i> ${propiedad.smoke ? " <p class='text-success'>Permitido fumar</p>" : "<p class='text-danger'>No se permite fumar</p>"}
        </p>
        <p class="text-danger">
          <i class="fa-solid fa-ban"></i> ${propiedad.pets ? "<p class='text-success'>Se permiten mascotas</p>" : "<p class='text-danger'>No se permiten mascotas</p>"}
        </p>
      </div>
    </div>
  </div>
  `;
   
  });

}
verProductos(propiedadesAlquiler);
