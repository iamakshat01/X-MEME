import React, { useState, useEffect } from 'react'
import {read} from '../meme/api-meme.js'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardTitle } from 'reactstrap';
import '../styles/single.css'
import {
  CardText, CardBody,Button
} from 'reactstrap';


function RenderItem({meme}){
    return (
            <div id="compo">
            <Card id="box">
            <CardBody>
             <span id="extra-card1">
            <CardTitle tag="h5">{meme.name}</CardTitle>
            <br/>
            <CardText id="card-text">{meme.caption}</CardText>
            </span>
            <Link to={"/memes/edit/" +meme.id}>
                <Button id="edit" type="submit" color="primary">
                    Edit Meme
                </Button>
          </Link>
          </CardBody>
          <Link to={"/memes/" + meme.id}>
          <CardImg bottom width="50%" src={meme.url} alt="Card image cap" />
          </Link>
          </Card>
          </div>
        );
}
export default function SingleMeme({ match }) {
 
  const [meme, setUser] = useState({})
  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      memeId: match.params.memeId
    }, signal).then((data) => {
      if (data && data.error) {
        //setRedirectToSignin(true)
      } else {
        setUser(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.memeId])
  
    return (
       <div className="container single">
          <RenderItem meme = {meme}/> 
       </div>
    )
}