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
      nombre: 'Casita bonita',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/390676601.jpg?k=9322f702f803d958ebb0cdf55826777feb3a684fc4cf982840c49c944e55eff9&o=&hp=1',
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
 const propiedadNueva = document.getElementById('tarjetacontenedor1')
 propiedadNueva.innerHTML = '';

 propiedades.slice(-3).forEach(propiedad=> {
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
        
          <i class="fas fa-smoking-ban"></i> ${propiedad.smoke ? " <p class='text-success'>Permitido fumar</p>" : "<p class='text-danger'>No se permite fumar</p>"}
        
        <p class="text-danger">
          <i class="fa-solid fa-ban"></i> ${propiedad.pets ? "<p class='text-success'>Se permiten mascotas</p>" : "<p class='text-danger'>No se permiten mascotas</p>"}}
        </p>
      </div>
    </div>
  </div>
  `;
   
  });

};

verProductos(propiedadesAlquiler);


function productos2(propiedades){
  console.log("prueba2");
const propiedadNueva = document.getElementById('tarjetacontenedor2')
propiedadNueva.innerHTML = '';
propiedades.slice(-3).forEach(propiedad=> {
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



productos2(propiedadenventa);