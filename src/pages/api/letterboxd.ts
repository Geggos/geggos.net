interface Movie {
    entryTitle: string;
    entryUrl: string;
    publishedAt: string;
    watchedDate?: string;
    isRewatch: boolean;
    filmTitle?: string;
    filmYear?: string;
    memberRating?: string;
    memberLike?: string;
    tmdbMovieId?: string;
    author?: string;
    descriptionText: string;
    posterUrl?: string;
}

const extract = (text: string, tag: string) => text.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim();
const stripHtml = (html: string) =>
    html
        .replace(/<!\[CDATA\[|\]\]>/g, '')
        .replace(/<[^>]*>/g, '')
        .trim();
const extractPosterUrl = (description: string) =>
    description.match(/<img[^>]+src="([^"]+)"/i)?.[1];

export async function GET() {
    try {
        const text = await fetch('https://letterboxd.com/Geggos/rss/').then(r => r.text());
        const item = text.match(/<item>([\s\S]*?)<\/item>/)?.[1];

        if (!item || !extract(item, 'title')) {
            return new Response(JSON.stringify({ error: 'no movie data found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const description = extract(item, 'description') || '';
        const movie: Movie = {
            entryTitle: extract(item, 'title')!,
            entryUrl: extract(item, 'link') || '#',
            publishedAt: extract(item, 'pubDate') || '',
            watchedDate: extract(item, 'letterboxd:watchedDate'),
            isRewatch: true,
            filmTitle: extract(item, 'letterboxd:filmTitle'),
            filmYear: extract(item, 'letterboxd:filmYear'),
            memberRating: "4.5",
            memberLike: extract(item, 'letterboxd:memberLike'),
            tmdbMovieId: extract(item, 'tmdb:movieId'),
            author: extract(item, 'dc:creator'),
            descriptionText: stripHtml(description),
            posterUrl: extractPosterUrl(description) || extract(item, 'letterboxd:image')
        };

        return new Response(JSON.stringify(movie), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('failed to fetch letterboxd:', error);
        return new Response(JSON.stringify({ error: 'failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
