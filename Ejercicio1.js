const ventas = [
  { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
  { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
  { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
  { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
  { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
  { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
  { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
  { id: 8, idarticulo: 101, cantidad: 1, fecha: '2024-08-04' },
  { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
  { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' }
];

const articulos = [
  { idarticulo: 101, nombre: 'Articulo A' },
  { idarticulo: 102, nombre: 'Articulo B' },
  { idarticulo: 103, nombre: 'Articulo C' },
  { idarticulo: 104, nombre: 'Articulo D' }
];

const obtenerArticuloPorId = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const articulo = articulos.find(a => a.idarticulo === id);
      if (articulo) {
        resolve(articulo);
      } else {
        reject(new Error(`Artículo con id ${id} no encontrado`));
      }
    }, 500); 
  });
};

const obtenerArticulosMasVendidos = async () => {
  const resumen = {};

  ventas.forEach(v => {
    if (!resumen[v.idarticulo]) {
      resumen[v.idarticulo] = 0;
    }
    resumen[v.idarticulo] += v.cantidad;
  });

  const articulosFiltrados = Object.entries(resumen)
    .filter(([id, cantidad]) => cantidad > 3)
    .map(([id, cantidad]) => ({ id: parseInt(id), cantidad }));

  for (const item of articulosFiltrados) {
    try {
      const articulo = await obtenerArticuloPorId(item.id);
      console.log(`${articulo.nombre} (id=${articulo.idarticulo}) tuvo ${item.cantidad} ventas`);
    } catch (error) {
      console.error(error.message);
    }
  }
};

obtenerArticulosMasVendidos();