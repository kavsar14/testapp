import React from "react";
import { View } from 'react-native';

import Insight from './../assets/images/Insight.svg';
import DeActivate from './../assets/images/DeActivate.svg';
import GetNewCard from './../assets/images/GetNewCard.svg';
import Limit from './../assets/images/Limit.svg';
import FreezeCard from './../assets/images/FreezeCard.svg';

export const getCardChunkFourDigits = (data, entryNumber) => {
    switch (entryNumber) {
        case 1:
            return data.toString().substring(0, 4);

        case 2:
            return data.toString().substring(4, 8);

        case 3:
            return data.toString().substring(8, 12);

        case 4:
            return data.toString().substring(12);
    
        default:
            '';
    }
}

export const getWeekUsagePercentage = (spending, limit) => {
    let percent = (spending / limit) * 100;
    return parseInt(percent);
}

export const getIconView = (iconName) => {
    switch (iconName) {
        case 'insight':
            return <Insight />;

        case 'deactivate':
            return <DeActivate />;

        case 'limit':
            return <Limit />;

        case 'getnewcard':
            return <GetNewCard />;

        case 'freezecard':
            return <FreezeCard />;
    
        default:
            return <View />;
    }
}

export const getIntegerLimitNumber = (value) => {
   let array = value.split(",");
   let numberString = '';
   array.forEach(data => {
       numberString += data;
   })
   return parseInt(numberString)
}