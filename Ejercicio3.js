const buscarPelicula = async (nombrePelicula) => {
  try {
    const query = encodeURIComponent(nombrePelicula);
    
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&page=1`;
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGIwNzVjN2NhZWFiOTgzODk3NTNkZWM2OTMyMjk2NSIsIm5iZiI6MTc1ODc2MzA4OS43NzksInN1YiI6IjY4ZDQ5ODUxMjVjNGY3YTIyODkzNjQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6MIkqwl0fDH2alPXC5pj3ZsyROb-LJDGbVICOp9TqzI"
      }
    };
    
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const primera = data.results[0];
      console.log(`
 Título: ${primera.title}
 Año de estreno: ${primera.release_date ? primera.release_date.split("-")[0] : "Desconocido"}
 Sinopsis: ${primera.overview || "Sin sinopsis disponible"}
      `);
    } else {
      console.log(` No se encontraron resultados para "${nombrePelicula}".`);
    }
  } catch (err) {
    console.error(" Error en la búsqueda:", err.message);
  }
};

buscarPelicula("Oppenheimer");
<p>Cambio realizado por Juan Rodriguez</p>

  

