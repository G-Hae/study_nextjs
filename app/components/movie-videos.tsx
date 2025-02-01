async function getVideos(id) {
    console.log(`fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error('에러났다냥...');
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
