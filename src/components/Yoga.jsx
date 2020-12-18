import React, { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import OAuth from 'oauth';

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


    useEffect(() => {
        oauth.get(
            'https://api.thenounproject.com/collection/yoga-pose-set-1/icons',
            null,
            null,
            function (e, data, res){
                if (e) console.error(e)
                console.log(JSON.parse(data));
            }
        )
        // const nounProject = new NounProject({
        // key: API_KEY,
        // secret: API_SECRET
        // });

        // nounProject.getIconsBySlug('yoga-pose-set-1', {limit: 5}, function (err, data) {
        //     if (!err) {
        //         console.log(data.icons);
        //     }
        // });

            },[])


    return (
        <div className="container">
            <Jumbotron>
               <h2> 
            Yoga offers physical and mental health benefits for people of all ages. 
            And, if you are going through an illness, recovering from surgery or living 
            with a chronic condition, yoga can become an integral part of your treatment 
            and potentially hasten healing.
                </h2>
            </Jumbotron>


        </div>
    );
}
export default Yoga;