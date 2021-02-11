import React from 'react';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import MemeSubmit from './MemeSubmit';
import '../styles/home.css'


function Home() {
    
    return(
        <div className="front">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1" id="part2">
                <h5>Welcome to X-Meme</h5>
                <h6>A unique place to interact with memes</h6>
                <Link to="/memes">
                <Button id="btnseememe" color="primary">
                    See Meme's
                </Button>
                </Link>
                </div>
                <div className="col-12 col-md m-1" id="part1"> 
                    <MemeSubmit/>
                </div>
            </div>
        </div>
    );
}
export default Home;