import { Reducer } from 'redux';

import * as Actions from '../../actions';
import * as Types from '../../actions/actionTypes';

import img from '../../../assets/images/aws.png';

interface PortfolioListProps {
    portfolioList: Array<{
        idx: number
        date: string
        title: string
        thum: string
        description: string
        tags: Array<{ idx: number, name: string }>
    }>
}


const initialState: PortfolioListProps = {
    portfolioList: [
        {
            idx: 1,
            date: "2021-04-01",
            title: "test 포트폴리오",
            thum: img,
            description: "간단한 설명",
            tags: [
                {
                    idx: 1,
                    name: "포트폴리오 초기값2"
                },
                {
                    idx: 2,
                    name: "포트폴리오 초기값"
                }
            ]
        }
    ]
};

const PortfolioList: Reducer<PortfolioListProps, Actions.PortfolioListAction> = (state = initialState, action) => {
    if (action.type === Types.POST_LIST) {
        return {
            ...state,
            PortfolioList: action.payload
        };
    } else {
        return state;
    }
};

export default PortfolioList;