import React, { useEffect, useState } from 'react';
import {connect } from "react-redux";
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import OAuth from 'oauth';
import YogaList from './YogaList';

const API_KEY = process.env.REACT_APP_API_KEY  
const API_SECRET = process.env.REACT_APP_API_SECRET 
const oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	API_KEY,
	API_SECRET,
	'1.0',
	null,
	'HMAC-SHA1'
)


const Yoga = () => {

  const YogaList =  {
        name: "name of the pose",
        image: "url of the pose",
        isFavorite: false
   }


const [yogaData, setYogaData]= useState({})
const [isLoading, setIsLoading]= useState(true)
const [yogaPoses, setYogaPoses]= useState([])
const [selectValue, setSelectValue] = useState("")


    useEffect(() => {
        oauth.get('https://api.thenounproject.com/collection/yoga-pose-set-1/icons',
            null,
            null,
            function (e, data, res){
                if (e) console.error(e)
                // console.log(JSON.parse(data));
                const yd = JSON.parse(data);
                console.log(yd);
                setYogaData(JSON.parse(data));
                setIsLoading(false)
                // getTerms(yd);
                    const newTerms = yd.icons.map((pose)=> {
        return (`${pose.term}`)
    })
console.log(newTerms);
    setYogaPoses(newTerms)
            } 
            
        )

            },[])

const handleSelectChange = (e) => {
    console.log(e.value);
}

    return (


        // const yoga = this.state.isReady ? this.state.yoga.map( url => <)
        <div className="container">
            <Jumbotron fluid>
                <Container>
               <h2>
                   Yoga
               </h2>
             <p>
            Yoga offers physical and mental health benefits for people of all ages. 
            And, if you are going through an illness, recovering from surgery or living 
            with a chronic condition, yoga can become an integral part of your treatment 
            and potentially hasten healing.
            </p>
                </Container>
            </Jumbotron>

            <div className="main-content">
                {!isLoading && 
                <>
                <h1>{yogaData.icons[10].term}</h1>
                <img id="yogaImage" src= {yogaData.icons[10].preview_url}/></>
                }
            </div>
            <div className="yoga-poses">
                <select value={selectValue} onChange={() => handleSelectChange}id="YogaList">
                    {/* <option>Select yoga pose:</option> */}
                    {yogaPoses.map(option => { return (<option value={option} key={option}>{option}</option>)} )}
                </select>

            </div>


            
        </div>
    );
}
export default Yoga;