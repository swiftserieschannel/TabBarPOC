
import * as Actions from '../AppConstants/Actions';

export const FirstTabInitialState = {
    isLoading: false,
    data: null,
    error: null,
};

export const FirstTabReducer = (state = initialCardsState, action) => {
    switch (action.type) {
        case Actions.GET_HOME_DATA:
            //top carousel data
            let homeData = {}
            //header data
            homeData.topCarouselData = action?.data?.headerImages ?? []
            homeData.header = {}
            homeData.header.title = action?.data?.header?.title ?? ""
            homeData.header.description = action?.data?.header?.description ?? ""
            //aashram features data
            homeData.aashramFeature = {}
            homeData.aashramFeature.title = action?.data?.feature?.title ?? ""
            homeData.aashramFeature.features = action?.data?.feature?.features ?? []
            //aashram news data
            homeData.news = {}
            homeData.news.title = action?.data?.news?.title ?? ""
            homeData.news.images = action?.data?.news?.newsImages ?? []
            return {...state,isLoading: false, data: homeData}
        case Actions.REQUEST_HOME_DATA:
            return {...state,isLoading: true}
        case Actions.GOT_ERROR:
             return {...state,isLoading: false,error: action?.message}
        default:
            break;
    }
}