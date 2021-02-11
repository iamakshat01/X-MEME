# X-Meme

X-Meme is a Web-App to share memes with captions.

## Rest-API Documentation

       /memes
            /get -> gives you detail about all memes result in the form of array of objects
                      [
                        {
                            name:
                            caption:
                            url:
                            id:
                        }
                      ]
                      
            /post -> let's you post a meme
                    request body fields needed
                    {
                        name:
                        caption:
                        url:
                    }
                    
       /memes/:memeId
            /get -> gives you detail of specific meme result
                {
                    name:
                    caption:
                    url:
                    id:
                }
            /patch -> let's you edit caption and url but not name
                {
                    caption:
                    url:
                }
       Error Handling is done to check for valid url and for empty fields also.




## Directory Structure
    /server : Contains code for server
        /handlers -> Stores about handler functions
            index.js
            meme.js
        /models  -> Stores database models
            index.js
            meme.js
        /routes  -> Stores routes
            indes.js
            meme.js
        dbErrorHandler.js
        index.js
        .env
        package.json
        package-lock.json
        

