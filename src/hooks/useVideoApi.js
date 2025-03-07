import { useState } from 'react';
import videoApi from '../providers/Youtube/Video.provider';

const useVidepApi = () => {
    const [loadedData, setLoadedData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const getData = async (filterData, mainData) => {
        try{
            let searchResults = null;
            if(filterData){
                if(mainData){
                    searchResults = await videoApi.getVideoData(filterData);
                }
                else{
                    searchResults = await videoApi.getRelatedVideoData(filterData);
                }

                if(searchResults && searchResults.items){
                    setLoadedData(searchResults.items);
                    setLoading(false);
                }
            }
            else{
                setLoading(false);
            }
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }
    return[loading, getData, loadedData];
}

export default useVidepApi;