import React, { useState,memo } from 'react';

import Habits from './Habits';
import Navbar from './Navbar';

const Main = () => {

    //총합 숫자합 카운트 저장소
    const [comb,setComb] = useState(0)
    
    const sim = [
        {name: 'Reading', count:1,id:1},
        {name: 'Running', count:1,id:2},
        {name: 'Coding', count:1,id:3},
    ]
 


    return (
        <>
            <Navbar totalCount={comb}/>
            <Habits comb={comb} setComb={setComb} sim={sim}/>
        </>
    );
};

export default memo(Main);