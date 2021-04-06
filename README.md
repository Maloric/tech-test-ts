# About

The goal of this repo is to test the developer's basic knowledge of Typescript, Promises and testing.

Open ./src/userService.ts and implement the getUsersWithPopularPosts function such that:

-   it returns users from the provided dataService as an array wrapped in a Promise
-   ensure that each user has a "posts" field that contains all posts by that user
-   the list of users should only include those who have written a "popular" post (any single post with 10 or more comments)

## Stretch goal

Implement unit tests for the getUsersWithPopularPosts method.
