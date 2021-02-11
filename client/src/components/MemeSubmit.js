import React, {useState} from 'react'
import {create} from '../meme/api-meme'
import { Redirect} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../styles/submit.css'


export default function MemeSubmit() {
  const [values, setValues] = useState({
    name: '',
    caption: '',
    url:'',
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    event.preventDefault();
    setValues({ ...values, [name]: event.target.value })
  }
  const clickSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: values.name || undefined,
      caption: values.caption || undefined,
      url: values.url || undefined,
    }
    create(user).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error.message})
      } else {
        setValues({ ...values, error: '', open: true})
      }
    })
  }
  if(values.open) {
    return (<Redirect to={'/memes/'}/>)
  }

    return (
      <div className="col-12 col-md-9">
      <Form onSubmit={clickSubmit} >
          <FormGroup row>
              <Label htmlFor="name" md={2}>Name</Label>
              <Col md={10}>
                  <Input type="text" id="name" name="name" placeholder="Name" value={values.name}  onChange={handleChange('name')} />
              </Col>
          </FormGroup>
          <FormGroup row>
              <Label htmlFor="caption" md={2}>Caption</Label>
              <Col md={10}>
                  <Input type="text" id="caption" name="caption" placeholder="Caption" value={values.caption} onChange={handleChange('caption')} />
                  
              </Col>
          </FormGroup>
          <FormGroup row>
              <Label htmlFor="url" md={2}>URL</Label>
              <Col md={10}>
                  <Input type="url" id="url" name="url" placeholder="Link of meme" value={values.url}  onChange={handleChange('url')} />
              </Col>
          </FormGroup> 
          <h5>{values.error}</h5>
          <FormGroup row>
            <Col md={{size:10, offset:2}}>
                <Button id="btn-submit" type="submit" color="primary">
                    Submit Meme
                </Button>
            </Col>
         </FormGroup>
      </Form>
      </div>
    )
}