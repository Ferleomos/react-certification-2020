import videoApi from "./Video.provider";
import {mockYoutubeData} from '../../mock/youtubeData';

describe('videos Api works', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        //global.fetch.mockClear();
    });

    test('validate is null when no data to search video is provided', async () => {
        const result = await videoApi.getVideoData();

        expect(result).toBe(null);
    });

    test('validate is null when no data to search related is provided', async () => {
        const result = await videoApi.getRelatedVideoData();

        expect(result).toBe(null);
    });

    test('validate is null when error occurs on video search', async () => {
        global.fetch = jest.fn(() => Promise.reject('api down'));
        const result = await videoApi.getRelatedVideoData('data test');

        expect(result).toBe(null);
    });

    test('validate is null when error occurs on related search', async () => {
        global.fetch = jest.fn(() => Promise.reject('api down'));
        const result = await videoApi.getVideoData('data test');

        expect(result).toBe(null);
    });

    test('returns object with valid data for videos', async() => {
        
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(JSON.stringify([mockYoutubeData?.[0]])),
            })
        );
        const result = await videoApi.getVideoData('data test');
        
        expect(result).not.toBe(null);
        expect(result).toEqual(JSON.stringify([mockYoutubeData?.[0]]));
    });

    test('returns object with valid data for videos', async() => {
        
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(JSON.stringify([mockYoutubeData?.[1]])),
            })
        );
        const result = await videoApi.getRelatedVideoData('data test');
        
        expect(result).not.toBe(null);
        expect(result).toEqual(JSON.stringify([mockYoutubeData?.[1]]));
    });
});