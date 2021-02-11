import React, {useState, useEffect} from 'react'
import {read, update} from '../meme/api-meme.js'
import {Redirect} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import '../styles/edit.css'


export default function EditMeme({ match }) {
  const [values, setValues] = useState({
    name: '',
    caption: '',
    url: '',
    error: '',
    redirectToProfile: false
  })
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      memeId: match.params.memeId
    }, signal).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error.message})
      } else {
        setValues({...values,name: data.name,caption: data.caption,url: data.url})
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [match.params.memeId])

  const clickSubmit = (e) => {
    e.preventDefault();
    const meme = {
      name: values.name || undefined,
      caption: values.caption || undefined,
      url: values.url || undefined
    }
    update({
      memeId: match.params.memeId
    }, meme).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error.message})
      } else {
        setValues({...values,redirectToProfile: true})
      }
    })
  }
  const handleChange = name => event => {
    event.preventDefault();
    setValues({...values, [name]: event.target.value})
  }
  if (values.redirectToProfile) {
    console.log(values.redirectToProfile)
    return (<Redirect to={'/memes/'}/>)
  } 
    return (
        <div id="part">
        <Form onSubmit={clickSubmit}>
        <FormGroup row>
            <Label htmlFor="name" md={2}>Name</Label>
            <Col md={10}>
                <Input disabled type="text" id="name" name="name" placeholder="Name" value={values.name}  onChange={handleChange('name')} />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label htmlFor="caption" md={2}>Caption</Label>
            <Col md={10}>
                <Input type="text" id="caption" name="caption" placeholder="caption" value={values.caption} onChange={handleChange('caption')} />
                
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label htmlFor="url" md={2}>URL</Label>
            <Col md={10}>
                <Input type="url" id="url" name="url" placeholder="URL" value={values.url}  onChange={handleChange('url')} />
            </Col>
        </FormGroup> 
        <FormGroup row>
        <h5>{values.error}</h5>
        <Col md={{size:10, offset:2}}>
            <Button id="btn-edit" type="submit" color="primary">
                Edit Meme
            </Button>
        </Col>
        </FormGroup>
        </Form>
        </div>
    )
}

