import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const Footer = () => {
    return (
        // <footer class="footer mt-auto py-3 bg-light">
        //     <div class="navbar fixed-bottom">
        //         <span class="text-muted">Feel Good Wellness</span>
        //     </div>
        // </footer>

        <div className="fixed-bottom">  
        <Navbar color="dark" dark>
            <Container>
                <Navbar.Brand><span class="text-muted">&copy; Feel Good Wellness</span></Navbar.Brand>
            </Container>
        </Navbar>
    </div>
    );
}

export default Footer;