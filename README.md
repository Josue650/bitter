<div style='font-size:30px; text-align:center'>
 "Bitter your not so friendly twitter clone"
</div>

<div style="display:flex;justify-content:center;">
<img src="images/signup.png" height='45%' width='45%'/>
<img src="images/Login.png"
height='50%' width='50%'/>
</div>

## Getting Started with the code (Bitter)
- Once you navigate to the App it will bring you to the Signup Page.
- You will be required to enter your credentials(username, email and password has to be atleast 4 characters)

## Technologies
-HTML
-React
-CSS
-Mongodb
-Material UI
-React flip move library -animation when posting tweets


## localhost:3001/api/users
| Action | URL | HTTP Verb | Mongoose Method|
|--------|-----|-----------|--------------|----------------|
| create  | / | POST | User.create()&Profile.create() |
| getUser | / | GET | User.findById() |
| login | /login | POST | User.findOne() |

------

## localhost:3001/api/tweets
| Action | URL | HTTP Verb | Mongoose Method|
|--------|-----|-----------|--------------|----------------|
| getAllTweets  | / | GET | Tweet.find() |
| destroyTweet | /:id | DELETE | Tweet.findByIdAndDelete() |
| updateTweet | /:id | PUT | Tweet.findByIdAndUpdate() |
| createTweet | / | POST | Tweet.create() |
| getOneTweet | /:id | GET | Tweet.findById() |
| updateLikes | /:id/likes | GET | currentTweet.updateOne() |

-----

## localhost:3001/api/profile
| Action | URL | HTTP Verb | Mongoose Method|
|--------|-----|-----------|--------------|----------------|
| updateProfile  | /:id | PUT | Tweet.find() |
| followProfile | /:followerId/follow | PUT | profile.updateOne() |
| unfollowProfile | /:followerId/unfollow | PUT | profile.updateOne() |
| getRandomProfile | /random/:randomId | GET | Profile.findById() |
| getUserTweets | /tweets | GET | Profile.findById(), profile.tweets |
| getFollowers | /followers | GET | profile.findById() |
| getProfile | / | GET | User.findOne(), user.profile |

-----

## localhost:3001/api/comments
| Action | URL | HTTP Verb | Mongoose Method|
|--------|-----|-----------|--------------|----------------|
| getAllComments  | /:tweetId | GET | Tweet.findById() |
| destroyComment| /:tweetId/:id | DELETE | Comment.findByIdAndDelete() |
| updateComment | /:tweetId/:id | PUT | Comment.findByIdAndUpdate() |
| getOneComment | /:tweetId/:id  | GET | Comment.findById() |
| createComment | /:tweetId | POST | Comment.create() |
| updateLikes | /:tweetId/:id/likes | GET | currentComment.updateOne() |