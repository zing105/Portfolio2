import React, { memo, useEffect, useRef, useState,useCallback } from 'react';
import styled from "styled-components";



const Form = styled.form`
display:flex ;
flex-basis: 100% ;
padding-right: 2% ;
`

const SearchInput = styled.input`
    width:100%;
    height:2em;
`
const Button = styled.button`
    width:27px ;
    height:27px ;
    background-color: darkgrey ;
    
`
const ScImg = styled.img`
    width: 100% ;
  
`

const Search = memo( ({setData,youtube,setSelectedVideo,setApiMap,setLoading}) => {


    const inputRef = useRef() 
    const mounted = useRef(false)
    
    const [inputText,setInput] = useState("")
    

    const onChange = useCallback((e) =>{
        setInput(e.target.value)
        
      },[])
    
    
     const [don,setDon] = useState(true)
     
      const onSubmit = useCallback((e)=>{
        e.preventDefault()
        
        if(inputText.replace(/\s|　/gi, "").length == 0){
          console.log("검색할게없음")
            return (
              setInput("")
            )
        }
        setDon(don => !don) //항상 반대로
      },[inputText])
    
//api 데이터불러오기
  useEffect(()=>{
    if(!mounted.current){ // 사이트접촉 초기 화면 api
      mounted.current = true;
      youtube.mostPopular().then(videos => setData(videos));
    }  else{// 검색하면 사용하는 api
      setLoading(true) // 로딩대기 화면 나오게함
      setSelectedVideo(null) // 검색시 초기화면으로 레이아웃 만들기 위한 false
      youtube.search(inputText).then(videos => setData(videos))
      setInput("")
      setApiMap(true)
      
      let timer = setTimeout(()=>{ setLoading(false) }, 600);
      return ()=>{ clearTimeout(timer) }
    }
    
  },[don])


  console.log("헤더")
    return (
        <>
      <Form onSubmit={onSubmit}>
        <SearchInput type="text" value={inputText} onChange={onChange} ref={inputRef}/>
        <Button type="submit">
          <ScImg src="/images/search.png" ale="돋보기"/>
        </Button>
      </Form>
        </>
    );
});

export default Search;