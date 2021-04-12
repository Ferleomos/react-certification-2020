import { VIDEO_MAIN_URL } from '../../utils/constants';
 
const getVideoData = async (queryS) => {
    try{
        const params = {
            q: queryS,
            key: process.env.REACT_APP_G_API_KEY,
            part: 'snippet',
            type: 'video',
            maxResults: 10
        }
        let videoUrl = new URL(VIDEO_MAIN_URL);
        videoUrl.search = new URLSearchParams(params).toString();
        //console.log(videoUrl);
        const response = await fetch('https://606b8b12f8678400172e65f9.mockapi.io/videoApi');
        //const response = await fetch(videoUrl);
        const json = await response.json();

        if (!response.ok) {
            throw Error(response.statusText);
        }
        return json;
    }
    catch(error){
        console.log(error);
    }
};

const getRelatedVideoData = async (relatedVideoId) => {
    try {
        const params = {
            relatedToVideoId: relatedVideoId,
            key: process.env.REACT_APP_G_API_KEY,
            part: 'snippet',
            type: 'video',
            maxResults: 10
        }
        let videoUrl = new URL(VIDEO_MAIN_URL);
        videoUrl.search = new URLSearchParams(params).toString();
        //console.log(videoUrl);
        const response = await fetch('https://606b8b12f8678400172e65f9.mockapi.io/relatedVideoApi');
        //const response = await fetch(videoUrl);
        const json = await response.json();

        if (!response.ok) {
            throw Error(response.statusText);
        }
        return json;
    } catch (error) {
        console.log(error);
    }
};

export default { getRelatedVideoData, getVideoData };
