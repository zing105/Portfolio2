import React, { useEffect, useState } from 'react';
import styled from "styled-components";


const Form = styled.form`
display:flex ;
width:40%;
`

const SearchInput = styled.input`
    width:100%;
    height:2em;
`
const Button = styled.button`
    width:27px ;
    height:27px ;
    
`


const Search = ({setData}) => {


    const [inputText,setInput] = useState("이세돌")


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
    

      const getYoutube = async() =>{

        const json = await (await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&key=AIzaSyD9hHo0bjEfpnBI4Pf8aD7pySkibaqFJBQ`)).json();
    
        setData(json.items)    
        setInput("")
      }


  useEffect(()=>{
    getYoutube()
    console.log("유튜브부름")
  },[don])



    return (
        <>
      <Form onSubmit={onSubmit}>
        <SearchInput type="text" value={inputText} onChange={onChange}/>
        <Button type="submit">🔎</Button>
      </Form>
        </>
    );
};

export default Search;