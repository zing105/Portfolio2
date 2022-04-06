import React, { useState,useCallback,memo, useRef } from 'react';
//테스트
const HabitAddForm = ({onAdd}) => {
    
    const [text,setText] = useState("")
    const spanRef = useRef(null);

    const onChange = useCallback((e) =>{
        setText(e.target.value)// text에 텍스트 넣기.
       
    },[setText])

    
    const onSubmit = useCallback( (e) =>{
        e.preventDefault()
        setText("")//텍스트 초기화
        onAdd(text) // 새배열 만들곳으로 데이터 보내기

        
        spanRef.current.focus(); //자동으로 인풋클릭
    },[onAdd, text])
    
    
    return (
        
        <form action="" className="add-form" onSubmit={onSubmit}>
                                        {/* value={text} 안넣으면 안지워진다. */}
            <input ref={spanRef}  onChange={onChange} value={text} type="text" className="add-input" placeholder='Habit'/>
            <button className="add-button">Add</button>
            
        </form>
    );
};

export default memo(HabitAddForm);