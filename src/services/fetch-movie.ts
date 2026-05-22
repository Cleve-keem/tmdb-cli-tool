const options = {
  method: "GET",
  headers: { accept: "application/json" },
};

export default async function fetchTMDBMovie(
  type: string,
  language: string,
  page: string,
) {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=${language}&page=${page}`;
  try {
    const response = await fetch(url, options);
    const movies = await response.json();
    return movies;
  } catch (error: any) {
    console.log(error.message);
  }
}
