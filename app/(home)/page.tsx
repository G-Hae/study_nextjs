import Link from 'next/link';

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export const metadata = {
    title: 'Home',
};
async function getMovie() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovie();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
