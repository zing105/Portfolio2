import React, { useEffect, useRef, useState } from 'react';
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

const Search = ({setData,youtube,setSelectedVideo,setApiMap}) => {


    const inputRef = useRef() 
    const mounted = useRef(false)
    
    const [inputText,setInput] = useState("")


    const onChange = (e) =>{
        setInput(e.target.value)
      }
    
    
     const [don,setDon] = useState(true)
     
      const onSubmit = (e)=>{
        e.preventDefault()
        
        if(inputText.replace(/\s|　/gi, "").length == 0){
          console.log("검색할게없음")
            return (
              setInput("")
            )
        }
        setDon(don => !don) //항상 빤대로
        
      }
    
//api 데이터불러오기
  useEffect(()=>{
    if(!mounted.current){ // 사이트접촉 초기 화면 api
      mounted.current = true;
      youtube.mostPopular().then(videos => setData(videos));
    } else{
      youtube.search(inputText).then(videos => setData(videos))
      console.log("검색됨")
      setInput("")
      setSelectedVideo(false)
      setApiMap(true)
    }
  
  },[don])



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
};

export default Search;