# About

The goal of this repo is to test the developer's basic knowledge of Typescript, RxJs and testing.

Open ./src/userService.ts and implement the getUsersWithPopularPosts function such that:

-   it returns users from the provided dataService as an Observable array
-   each user should have a "posts" field that contains all posts by that user
-   it only returns users who have written a "popular" post (a single post with 10 or more comments)

## Stretch goal

Implement unit tests for the getUsersWithPopularPosts method.
