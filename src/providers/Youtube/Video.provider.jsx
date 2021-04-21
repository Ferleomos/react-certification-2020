import { VIDEO_MAIN_URL } from '../../utils/constants';
 
const getVideoData = async (queryS) => {
    try{
        if(!queryS){
            return null;
        }

        const params = {
            q: queryS,
            key: process.env.REACT_APP_G_API_KEY,
            part: 'snippet',
            type: 'video',
            maxResults: 10
        }
        const videoUrl = new URL(VIDEO_MAIN_URL);
        videoUrl.search = new URLSearchParams(params).toString();
        const response = await fetch(videoUrl);

        const json = await response?.json() ?? null;
        return json;
    }
    catch(error){
        console.log(error);
        return null;
    }
};

const getRelatedVideoData = async (relatedVideoId) => {
    try {
        if(!relatedVideoId){
            return null;
        }

        const params = {
            relatedToVideoId: relatedVideoId,
            key: process.env.REACT_APP_G_API_KEY,
            part: 'snippet',
            type: 'video',
            maxResults: 10
        }
        const videoUrl = new URL(VIDEO_MAIN_URL);
        videoUrl.search = new URLSearchParams(params).toString();
        const response = await fetch(videoUrl);
        
        const json = await response?.json() ?? null;
        return json;
    } 
    catch (error) {
        console.log(error);
        return null;
    }
};

export default { getRelatedVideoData, getVideoData };
