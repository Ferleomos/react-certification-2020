import { renderHook, act } from '@testing-library/react-hooks';
import useVideoApi from "./useVideoApi";
import videoApi from "../providers/Youtube/Video.provider";
import {mockYoutubeData} from "../mock/youtubeData";

jest.mock('../providers/Youtube/Video.provider', () => ({
    getVideoData: jest.fn(),
}));

describe('validate video api custom Hook works properly', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('returns initial state correct', () => {
        const { result } = renderHook(() => useVideoApi());
        const [loading, , loadedData] = result.current;

        expect(loading).toBe(true);
        expect(loadedData).toBe(null);
    });

    test('change state when loading data', () => {
        const { result } = renderHook(() => useVideoApi());
        const [, getData, ] = result.current;

        act(() => {
            getData('filterdata', 'maindata');
        });

        const [loading,, ] = result.current;

        expect(loading).toBe(true);
    });

    test('return to loading false once data has been fetched', async () => {
        const completeObject = {
            items: mockYoutubeData
        };
        videoApi.getVideoData.mockReturnValue(completeObject);

        const { result } = renderHook(() => useVideoApi());
        const [,getData,] = result.current;
        
        await act(async () => {
            await getData('filterdata', 'maindata');
        });

        const [loading,,loadedData ] = result.current;
        
        expect(loading).toBe(false);
        expect(loadedData).toBe(mockYoutubeData);
      });
});