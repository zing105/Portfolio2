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

const Search = ({setData}) => {
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
    

      const searchYouTube = () =>{
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&type=video&key=AIzaSyD9hHo0bjEfpnBI4Pf8aD7pySkibaqFJBQ`, requestOptions)
          .then(response => response.json())
          .then(result => setData(result.items))
          .catch(error => console.log('error', error));
          setInput("")
          console.log("서치영상")
      }



      const getYoutube = () =>{

        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD9hHo0bjEfpnBI4Pf8aD7pySkibaqFJBQ", requestOptions)
          .then(response => response.json())
          .then(result => setData(result.items))
          .catch(error => console.log('error', error));
        
    
        console.log("모스트 영상")
      }

      


  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;
      getYoutube()
    } else{
      searchYouTube()
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