// local base url
export const BASE_URL = "https://todo-6ze3.onrender.com";

// cloud base url


// auth urls
export const REGISTER = `${BASE_URL}/api/user/`; // register user api endpoint
export const LOGIN = `${BASE_URL}/api/user/login`; // login user api endpoint

// user url
export const MYPOSTS = `${BASE_URL}/api/user/myPosts`; // get my posts from db

// post urls
export const CREATEPOST = `${BASE_URL}/api/post/create`; // create a new post in the database (only for logged-in users)
export const UPDATEPOST = `${BASE_URL}/api/post/update`; // update a single post in the database (PUT)
export const DELETEPOST = `${BASE_URL}/api/post/delete`; // delete a single post in the database(DELETE)
