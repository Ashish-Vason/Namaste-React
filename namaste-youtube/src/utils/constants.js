const YOUTUBE_API_KEY = 'AIzaSyDozVHE7fV2XTQES6yvWcTbC7kgpAqMbaE';

export const YOUTUBE_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${YOUTUBE_API_KEY}&maxResults=50`;

export const LIVE_CHAT_MAX_LENGTH = 20;
