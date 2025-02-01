import { Suspense } from 'react';
import MovieInfo from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

export default async function MovieDetail({ params }: { params: { id: string } }) {
    const { id } = params;
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
