import React from 'react';
import yogaposes from './images/yogaposes.jpeg';

console.log(yogaposes);
function Header() {
     
        
     return <img src={yogaposes} width={800} height={800} alt="Yoga" />;
}

export default Header;
