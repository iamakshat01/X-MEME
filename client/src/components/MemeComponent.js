import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {list} from '../meme/api-meme'
import '../styles/multiple.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';


// A function to render a single meme
function RenderMenuItem({meme}){
    return (
         <Card>
            <CardBody>
            <span id="extra-card1">
            <CardTitle tag="h5">{meme.name}</CardTitle>
            <br/>
            <CardText >{meme.caption}</CardText>
            </span>
            <Link to={"/memes/edit/" +meme.id}>
                  <Button id="edit" color="primary">
                      Edit Meme
                  </Button>
            </Link>
            </CardBody>
            <Link to={"/memes/" + meme.id}>
            <CardImg bottom width="100%" src={meme.url} alt="Card image cap" />
            </Link>
          </Card>
        );
}
export default function Memes() { 
  const [memes, setMemes] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data)
      } else {
        setMemes(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
   const menu = memes.map((meme,i) => {
    return (
          <div key={meme.id} className='col-12 col-md-5 m-1'>
          <RenderMenuItem meme = {meme}/> 
          </div>
    );
    });
    return (
            <div className='multiple'>
              <div className="container">
                <div className='row'>
                    {menu}
                </div>
              </div>
            </div>
    )
}
