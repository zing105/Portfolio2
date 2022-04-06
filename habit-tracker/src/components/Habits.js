import React, { useState,memo } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';
   
    

const Habits = ({sim,comb,setComb}) => {
    const [switchs,setSwitchs] = useState(false)
   
    const [habits, setHabits] = useState(sim)
    


    const Delete = (id,num) =>{
            setHabits(habits.filter((student) => student.id !== id));
            setComb(comb-num) //딜리트로 num 각 li 숫자값을받아와서 총합값에서 빼는것.



            
    }


    //추가 버튼 누를시 할 동작 setHabits에 추가될 배열만들기
    const onAdd = name =>{
        const newHabits = [...habits,{id:Date.now(), name:name, count:0}];
        setHabits(newHabits)
    }
    




    

    const Reset = () =>{ 
            setComb(0) // 총합카운트 0 로만듬.

             //토글로 이용한 useEffect의 반응 사용하여 리셋시키기
             // ! 느낌표는 항상 반대로 준다. useEffact 에 토글하기 좋음
            setSwitchs(!switchs)

        
             //받아몬 데이터를 카운트를 다 0로 만들어주줌
            habits.map(item => {
             
                if(item.count === 0 ){
                    return {item}
                }
                else{

                    
                    
                    return {...item, count : 0}
                }
            })
        }


       
        // const reset = habits.map(item =>{
        //      item.count = 0;
        //      console.log(item.count)
        //      return item
        // })
   // setHabits(reset)
    
    

 
    return (
        <>
        <HabitAddForm onAdd={onAdd}/>
        <ul>
            { 
            habits.map((item) => (
            <Habit key={item.id} habits={item} count={item.count}  Delete={Delete} 
            sim={sim.count} comb={comb} setComb={setComb}  switchs={switchs} setSwitchs={setSwitchs} />
            )
            )  } 
            
        </ul>
        <button className="habits-reset" onClick={()=>Reset()}>Reset All</button>
        </>
    );
};

export default memo(Habits);