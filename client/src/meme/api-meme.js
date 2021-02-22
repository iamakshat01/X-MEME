const api='https://still-castle-64800.herokuapp.com'

// to submit a meme
const create = async (meme) => {
    try {
        let response = await fetch(api+'/memes', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(meme)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
}

// to fetch all the memes
const list = async (signal) => 
{
    try 
    { 
      let response = await fetch(api+'/memes', {
        method: 'GET',
        signal: signal
    })
    return await response.json()
    } catch(err) {
    console.log(err)
    }
}

// To fetch a meme with specific id
const read = async (params, signal) => {
    try {
      let response = await fetch(api+'/memes/'+params.memeId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
}

// To update a existing meme
const update = async (params, meme) => {
    try {
      let response = await fetch(api+'/memes/'+params.memeId, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meme)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
}
export { create, list, read, update }