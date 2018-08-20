# Pass-The-Podcorn
Pass the Podcorn is a podcast review app where users can listen to trailers for podcasts and if they’ve already seen the podcast, they can leave a review! 


## Motivation




## App Link




## Code Example
```javascript

const db =  require('../models/podcasts');

function showAll(req, res) {
    db.allPodcasts()
    .then(podcasts => {
        res.json({
            message: 'ok',
            data: { podcasts },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};


```



## Appshots & Wireframes
![Wireframe](/wireframes/ERD.png)



More can be found in the Wireframes folder.


## User Stories


## Built with

[GitHub] (https://code.visualstudio.com/)
[GitHub] EJS
[GitHub] Express
[GitHub] Morgan
[GitHub] Heroku




## How to Use:
To test it out yourself, feel free to fork and clone this repo.

## Unsolved Problems:



### Things to be added later:



## Credits

* 


## License

GA © Ashley Thompson, Daylan Seid, William Wilson, Samatha Persad, Shua Wolff