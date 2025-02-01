import { API_URL } from '../(home)/page';

async function getMovieDetail(id: string) {
    console.log(`fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const info = await getMovieDetail(id);
    return <h6>{JSON.stringify(info)}</h6>;
}
