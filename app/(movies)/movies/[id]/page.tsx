import { Suspense } from 'react';
import MovieInfo, { getMovieDetail } from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

interface IParams {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
    const { id } = await params;
    const movie = await getMovieDetail(id);
    return {
        title: movie,
    };
}

export default async function MovieDetail({ params }: IParams) {
    const { id } = await params;
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
