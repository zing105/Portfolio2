import React, { useState,useEffect,memo,useCallback, useRef } from 'react';

const Habit = ({habits,count,Delete,setComb,comb, switchs }) => {

  
    
    
    

    const [num,setNum] = useState(count)
    const buttonS = useRef(null)



  

    useEffect(()=>{
        //마운트 업데이트 (추가)
        console.log(habits.name,"추가?")


        //언마운트 (제거 하는 개념의리턴)
       return () => {
           console.log(habits.name,"리턴= 제거")
       }
    },[])
  
    
    //모든걸 리셋할때 필요한것
    useEffect(()=>{
        setNum(0)
        
    },[switchs])


    const handleIncrement = useCallback((habit) =>{
        
        
        setComb(comb+1)
        if(habit.id === habits.id){
            
            return ({...habit, count:setNum(num +1)})
            
        }else{
            return({habits})
        }

    
        
    
         },[comb, habits, num, setComb])

    const handleDecrement = useCallback((habit) =>{
       
        if(num === 0 ){return}

        else if(habit.id === habits.id){
            setComb(comb-1)
            return ({...habit, count:setNum(num -1)})
            
            
        }else{
            return({habits})
        }
        
         },[comb, habits, num, setComb])
         


         
      
        

    
    return (
        
        <li className="habit" >
       <span ref={buttonS} className="habit-name">{habits.name}</span>
       <span ref={buttonS} className="habit-count">{num}</span>
       <button ref={buttonS} className="habit-button habit-increase" onClick={()=>handleIncrement(habits)}>
       <i ref={buttonS} className="fa-solid fa-square-plus"></i>
       </button>
       <button ref={buttonS} className="habit-button habit-decrease" onClick={()=>handleDecrement(habits)}>
       <i ref={buttonS} className="fa-solid fa-square-minus"></i>
       </button>
                                                                    {/* 딜리트로 아이디값을 보내줘야했다!  + 두개의 데이터를 보냄 */}
       <button className="habit-button habit-delete" onClick={()=>{
       
           Delete(habits.id,num)
       
       }}>
       <i className="fa-solid fa-trash"></i>
       </button>

       </li>
    );
};

export default memo(Habit);