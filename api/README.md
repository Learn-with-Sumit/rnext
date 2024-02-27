# React Blogify Api

React Blogify is an API project designed to facilitate learning about integrating APIs with frontend applications, particularly in React. The API provides various endpoints for managing blog posts, user authentication, profile management, and interaction with blog content.

**API Documentation** - [https://documenter.getpostman.com/view/9649334/2sA2rCU2NA](https://documenter.getpostman.com/view/9649334/2sA2rCU2NA)

## Getting started

Install All the packages

```bash
npm install
```

Start Server :

```bash
npm run dev
```

## Credentials

```
Email: saadhasan@learnwithsumit.com
Password : learnwithsumit123
```

```
Email: akash@learnwithsumit.com
Password : learnwithsumit123
```

**Endpoints:**

1. **Authentication:**
   - `/auth/register`: Register a new user.
   - `/auth/login`: Log in an existing user and obtain JWT tokens for authentication.
   - `/auth/refresh-token`: Refresh the access token using the refresh token.
2. **Blog Posts:**
   - `/blogs`: Retrieve blog posts or create a new blog post.
   - `/blogs/:id`: Retrieve, update, or delete a specific blog post by ID.
   - `/blogs/:id/comment`: Add a comment to a specific blog post.
   - `/blogs/:id/like`: Like a specific blog post.
   - `/blogs/:id/favorite`: Mark a specific blog post as a favorite.
3. **Profile Management:**
   - `/profile/:userId`: Retrieve the profile information of a specific user.
   - `/profile/avatar`: Upload or retrieve the avatar image for the user's profile.
   - `/profile`: Update the profile information of the authenticated user.

# 📁 Collection: User Authentication

## End-point: login

This API endpoint allows users to authenticate and obtain access tokens for accessing protected resources within the system. Upon successful authentication, the endpoint returns a user object along with an access token and a refresh token.

## Endpoint

`POST {{BASE_URL}}/auth/login`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email" : "saad.hasan2@gmail.com",
    "password" : "123as123"
}'

```

### Request Body Parameters

| Field    | Required | Description                                      |
| -------- | -------- | ------------------------------------------------ |
| email    | Required | The email address of the user.                   |
| password | Required | The password associated with the user's account. |

## Response

### Success Response

```json
{
  "user": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "email": "saad.hasan2@gmail.com",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": null,
    "favourites": []
  },
  "token": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcwODUwNTc3NywiZXhwIjoxNzA4NTA5Mzc3fQ.Jbup2LBySUgEoI22ZkvdIY-DOCLPU1l3qgp0AIJpJkQ",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3MDg1MDU3NzcsImV4cCI6MTcwODU5MjE3N30.8pDDHQc3kT0TW_QWDWd0T-hnSM4brSou6qI3RVYNSl4"
  }
}
```

### Response Body Parameters

- **user** (object): Information about the authenticated user.
  - **id** (string): The unique identifier of the user.
  - **email** (string): The email address of the user.
  - **firstName** (string): The first name of the user.
  - **lastName** (string): The last name of the user.
  - **avatar** (string, nullable): URL to the user's avatar image.
  - **favourites** (array): An array of the user's favorite items.
- **token** (object): Tokens issued upon successful authentication.
  - **accessToken** (string): A JWT access token used for authenticating subsequent requests.
  - **refreshToken** (string): A JWT refresh token used for obtaining new access tokens.

---

### Method: POST

> ```
> {{BASE_URL}}/auth/login
> ```

### Body (**raw**)

```json
{
  "email": "saadhasan@learnwithsumit.com",
  "password": "learnwithsumit123"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Register User

#### Endpoint

```http
POST /auth/register

```

#### Description

Registers a new user with the provided email, password, first name, and last name.

#### Request

```bash
curl --location 'http://localhost:3000/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "saad.hasan2@gmail.com",
    "password": "12300123",
    "firstName": "Saad",
    "lastName": "Hasan"
}'

```

- **email**: Email address of the user.
- **password**: User's chosen password.
- **firstName**: First name of the user.
- **lastName**: Last name of the user.

#### Response

Upon successful registration, the endpoint returns a JSON object containing the newly registered user's details along with authentication tokens.

```json
{
  "user": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "email": "saad.hasan2@gmail.com",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": null,
    "favourites": []
  },
  "token": {
    "accessToken": "<access_token>",
    "refreshToken": "<refresh_token>"
  }
}
```

- **id**: Unique identifier of the newly registered user.
- **email**: Email address of the user.
- **firstName**: First name of the user.
- **lastName**: Last name of the user.
- **avatar**: Avatar of the user (if available, otherwise null).
- **favourites**: List of favorite items (empty array by default).
- **accessToken**: JWT access token for authentication.
- **refreshToken**: JWT refresh token for refreshing access tokens.

#### Status Codes

- **201 Created**: User successfully registered.
- **400 Bad Request**: Invalid request body.
- **409 Conflict**: User with the provided email already exists.

### Method: POST

> ```
> {{BASE_URL}}/auth/register
> ```

### Body (**raw**)

```json
{
  "email": "saadhasan@learnwithsumit.com",
  "password": "learnwithsumit123",
  "firstName": "Saad",
  "lastName": "Hasan"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Refresh Token

This API endpoint allows users to refresh their access tokens using a valid refresh token. The endpoint receives a refresh token as input and returns a new access token and refresh token pair.

## Endpoint

`POST {{BASE_URL}}/auth/refresh-token`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/auth/refresh-token' \
--header 'Content-Type: application/json' \
--data '{
  "refreshToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzYzBkMTNjLWRhM2QtNDllZC05N2U1LWI3MzhmZDFjNGEwYyIsImVtYWlsIjoic2FhZC5oYXNhbkBnbWFpbC5jb20iLCJ0eXBlIjoicmVmcmVzaCIsImlhdCI6MTcwODM1NTQ1MCwiZXhwIjoxNzA4NDQxODUwfQ.ENlBE-6fcUw9MYIiltkNrACINmbQTBR1n_3PM_sSejc"
}'

```

### Request Body Parameters

| Field        | Description                                       |
| ------------ | ------------------------------------------------- |
| refreshToken | The refresh token obtained during authentication. |

## Response

### Success Response

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcwODUwNjEyMSwiZXhwIjoxNzA4NTA5NzIxfQ.QMtejsIM1kWhD1ExEZv8cAQb_jhakm_2qBCokAM2ETk",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3MDg1MDYxMjEsImV4cCI6MTcwODU5MjUyMX0.NSdZwBJo_q3s44R3VeGPRiLMNyWSPCA9Llr7dDlkwUg"
}
```

### Response Body Parameters

- **accessToken** (string): A new JWT access token used for authenticating subsequent requests.
- **refreshToken** (string): A new JWT refresh token used for obtaining new access tokens.

### Method: POST

> ```
> {{BASE_URL}}/auth/refresh-token
> ```

### Body (**raw**)

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3MDg1MDU3NzcsImV4cCI6MTcwODU5MjE3N30.8pDDHQc3kT0TW_QWDWd0T-hnSM4brSou6qI3RVYNSl4"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Blogs

## End-point: Comment

This API endpoint allows users to add a comment to a specific blog post. Users must provide the blog ID along with the comment content in the request body. Authentication using a bearer token is required to access this endpoint.

## Endpoint

`POST {{BASE_URL}}/blogs//comment`

## Request

### cURL Example

```bash
curl --location &#x27;http://localhost:3000/blogs/<blog_id>/comment&#x27; \
--header 'Content-Type: application/json' \
--header &#x27;Authorization: Bearer <access_token>&#x27; \
--data '{
    "content": "<comment_body>"
}'

```

### Request Body Parameters

- **content** (string): The content of the comment to be added to the blog post.

## Response

### Success Response

```json
{
  "id": "2d716ab74691a2c5c964",
  "title": "New JavaScript Version is Available",
  "content": "Hello",
  "thumbnail": null,
  "author": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": null
  },
  "tags": ["a"],
  "likes": 0,
  "comments": [
    {
      "id": "175c33d429e6242203b6",
      "content": "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      "author": {
        "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
        "firstName": "Saad",
        "lastName": "Hasan",
        "avatar": "avatar-1708589704280-90672434.jpeg"
      }
    }
  ]
}
```

### Response Body Parameters

- **id** (string): The unique identifier of the blog post.
- **title** (string): The title of the blog post.
- **content** (string): The content of the blog post.
- **thumbnail** (string): The filename of the thumbnail image associated with the blog post.
- **author** (object): Information about the author of the blog post.
  - **id** (string): The unique identifier of the author.
  - **firstName** (string): The first name of the author.
  - **lastName** (string): The last name of the author.
  - **avatar** (string): The filename of the author's avatar image.
- **tags** (array): An array of tags associated with the blog post.
- **likes** (integer): The number of likes on the blog post.
- **comments** (array): An array of comments posted on the blog post. Each comment object contains:
  - **id** (string): The unique identifier of the comment.
  - **content** (string): The content of the comment.
  - **author** (object): Information about the author of the comment.
    - **id** (string): The unique identifier of the author.
    - **firstName** (string): The first name of the author.
    - **lastName** (string): The last name of the author.
    - **avatar** (string): The filename of the author's avatar image.

### Method: POST

> ```
> {{BASE_URL}}/blogs/7c12b4b48531bcc995ae/comment
> ```

### Body (**raw**)

```json
{
  "content": "আমি JavaScript এর অনেক  টিউটোরিয়াল দেখেছি অন্যান্য ভাইয়াদের channel থেকে। আমার মনে হয়, কিছু কিছু ভাইদের উদ্দেশ্য হয়তো বিগিনারদের ভীতু করা, ভাগিয়ে দেওয়া যে সহজ বিষয় কঠিন করে বুঝানো। আমি আপনার মধ্যে সেটা একদমই দেখি না। সত্যিকার অর্থে- আপনি একজন বিগিনারবান্ধব।। অসংখ্য ধন্যবাদ ভাইয়া আপনাকে।"
}
```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Comment

This API endpoint allows users to delete a comment from a specific blog post. Users must provide the blog ID and the comment ID in the URL to specify the blog post and the comment to be deleted. Authentication using a bearer token is required to access this endpoint.

## Endpoint

`DELETE {{BASE_URL}}/blogs//comment/`

## Request

### cURL Example

```bash
curl --location --request DELETE &#x27;http://localhost:3000/blogs/<blog_id>/comment/<comment_id>&#x27; \
--header &#x27;Authorization: Bearer <access_token>&#x27;

```

## Response

### Success Response

Upon successful deletion, the API returns the updated details of the blog post with the comment removed.

```json
{
  "id": "2d716ab74691a2c5c964",
  "title": "New JavaScript Version is Available",
  "content": "Hello",
  "thumbnail": null,
  "author": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": null
  },
  "tags": ["a"],
  "likes": 0,
  "comments": []
}
```

### Response Body Parameters

- **id** (string): The unique identifier of the blog post.
- **title** (string): The title of the blog post.
- **content** (string): The content of the blog post.
- **thumbnail** (string): The filename of the thumbnail image associated with the blog post.
- **author** (object): Information about the author of the blog post.
  - **id** (string): The unique identifier of the author.
  - **firstName** (string): The first name of the author.
  - **lastName** (string): The last name of the author.
  - **avatar** (string): The filename of the author's avatar image.
- **tags** (array): An array of tags associated with the blog post.
- **likes** (integer): The number of likes on the blog post.
- **comments** (array): An empty array indicating that the comment has been successfully deleted.

### Method: DELETE

> ```
> {{BASE_URL}}/blogs/2d716ab74691a2c5c964/comment/175c33d429e6242203b6
> ```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Favourites

### Method: GET

> ```
> {{BASE_URL}}/blogs/favourites
> ```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Toggle Favourite

### Method: PATCH

> ```
> {{BASE_URL}}/blogs/7c12b4b48531bcc995ae/favourite
> ```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Popular

This API endpoint allows users to retrieve a list of popular blog posts. The popularity of a blog post is determined based on certain criteria, such as the number of likes or views. This endpoint returns a paginated list of popular blog posts.

## Endpoint

`GET {{BASE_URL}}/blogs/popular`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/blogs/popular'

```

## Response

### Success Response

Upon successful retrieval, the API returns a list of popular blog posts along with the total count.

```json
{
    "total": 5,
    "blogs": [
        {
            "id": "2d716ab74691a2c5c964",
            "title": "New JavaScript Version is Available",
            "content": "Hello",
            "thumbnail": null,
            "author": {
                "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
                "firstName": "Saad",
                "lastName": "Hasan",
                "avatar": null
            },
            "tags": [
                "a"
            ],
            "likes": 0,
            "comments": []
        },
        ... More 4 blogs
    ]
}

```

### Response Body Parameters

- **total** (integer): The total number of popular blog posts.
- **blogs** (array): An array of popular blog posts. Each blog post object contains the following parameters:
  - **id** (string): The unique identifier of the blog post.
  - **title** (string): The title of the blog post.
  - **content** (string): The content of the blog post.
  - **thumbnail** (string): The filename of the thumbnail image associated with the blog post.
  - **author** (object): Information about the author of the blog post.
    - **id** (string): The unique identifier of the author.
    - **firstName** (string): The first name of the author.
    - **lastName** (string): The last name of the author.
    - **avatar** (string): The filename of the author's avatar image.
  - **tags** (array): An array of tags associated with the blog post.
  - **likes** (integer): The number of likes on the blog post.
  - **comments** (array): An array of comments posted on the blog post.

### Method: GET

> ```
> {{BASE_URL}}/blogs/popular
> ```

### Query Params

| Param | value |
| ----- | ----- |
| limit | 5     |

### 🔑 Authentication noauth

| Param | value | Type |
| ----- | ----- | ---- |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create New Blog

This API endpoint allows users to create a new blog post. Users need to provide the title, content, tags, and an optional thumbnail image for the blog post. Authentication using a bearer token is required to access this endpoint.

## Endpoint

`POST {{BASE_URL}}/blogs/`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/blogs/' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcwODUxNzQyNCwiZXhwIjoxNzA4NTIxMDI0fQ.S_5xMUuiSg__qbup6N9cWpIuQerEvE0B9uVANgmISh0' \
--form 'title="Title"' \
--form 'content="Hello"' \
--form 'tags="[\"a\"]"' \
--form 'thumbnail=@"/home/saad/Pictures/-2147483648_-220821.jpg"'

```

### Request Body Parameters

| Field     | Description                                     |
| --------- | ----------------------------------------------- |
| title     | The title of the blog post.                     |
| content   | The content of the blog post.                   |
| tags      | An array of tags associated with the blog post. |
| thumbnail | An optional thumbnail image for the blog post.  |

## Response

### Success Response

```json
{
  "status": "success",
  "message": "Blog created successfully",
  "blog": {
    "id": "7a5c4621f80d70b159bc",
    "title": "Title",
    "content": "Hello",
    "thumbnail": "thumbnail-1708518003904-328901220.jpg",
    "author": {
      "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
      "firstName": "Saad",
      "lastName": "Hasan",
      "avatar": null
    },
    "tags": ["a"],
    "likes": 0,
    "comments": []
  }
}
```

### Response Body Parameters

- **status** (string): Indicates the status of the request.
- **message** (string): A message indicating the outcome of the request.
- **blog** (object): Information about the created blog post.
  - **id** (string): The unique identifier of the blog post.
  - **title** (string): The title of the blog post.
  - **content** (string): The content of the blog post.
  - **thumbnail** (string, nullable): The filename of the uploaded thumbnail image.
  - **author** (object): Information about the author of the blog post.
    - **id** (string): The unique identifier of the author.
    - **firstName** (string): The first name of the author.
    - **lastName** (string): The last name of the author.
    - **avatar** (string, nullable): URL to the author's avatar image.
  - **tags** (array): An array of tags associated with the blog post.
  - **likes** (integer): The number of likes received by the blog post.
  - **comments** (array): An array of comments posted on the blog post.

### Method: POST

> ```
> {{BASE_URL}}/blogs/
> ```

### Body formdata

| Param   | value                                                                                                                                                                                                                        | Type |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| title   | A guide to Prototype in JavaScript                                                                                                                                                                                           | text |
| content | Developers may construct interactive and dynamic online apps with the robust programming language — JavaScript. The prototype is one of the most crucial ideas in JavaScript since it allows objects to share functionality. |

Prototypes in JavaScript
Every object in JavaScript has a prototype, which serves as the object’s bare bones. The methods and properties that an object will inherit are specified in the prototype. An object inherits all of its prototype’s properties and functions when you create a new one.
In this example, we define the Person constructor function, which has the two inputs of name and age. The Person prototype then gets a new method called sayHello that logs a welcome message to the console.

The new keyword is then used to create a new Person object called sumit. JavaScript searches the prototype chain of the sumit object for the sayHello method when the sayHello method is called on the sumit object. As the sayHello method is present in the Person prototype, JavaScript locates it and uses it to greet the sumit object.

Because you may share functionality amongst objects without having to write duplicate code, prototypes are crucial in JavaScript. For instance, you could simply create a new object and set its prototype to be the Person prototype if you wanted to create another object that had the same sayHello method as the Person object|text|
|tags|programming, algorithm, prototype, javascript|text|
|thumbnail|/home/saad/Pictures/prototype.png|file|

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Single Blog

This API endpoint allows users to retrieve a specific blog post by its unique identifier (ID). Users can use this endpoint to fetch detailed information about a particular blog post.

## Endpoint

`GET {{BASE_URL}}/blogs/{{blog_id}}`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/blogs/{{blog_id}}' \
--data ''

```

### Request Body Parameters

- No request body parameters required.

## Response

### Success Response

```json
{
  "id": "2fe4e76d3c093004d58f",
  "title": " async/await a good idea? 🤔 async/await vs promises",
  "content": "Understanding Promises 🤝\nBefore the advent of async/await, Promises were the go-to solution for handling asynchronous operations in JavaScript. A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks instead of using nested callbacks in a complex phenomenon often referred to as \"callback hell.\"",
  "thumbnail": "thumbnail-1708704068214-912948094.jpeg",
  "author": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": "avatar-1708589704280-90672434.jpeg"
  },
  "tags": ["async", "js", "javascript"],
  "likes": [],
  "comments": [],
  "createdAt": "2024-02-23T16:01:08.230Z"
}
```

### Response Body Parameters

- **id** (string): The unique identifier of the blog post.
- **title** (string): The title of the blog post.
- **content** (string): The content of the blog post.
- **thumbnail** (string): The filename of the thumbnail image associated with the blog post.
- **author** (object): Information about the author of the blog post.
  - **id** (string): The unique identifier of the author.
  - **firstName** (string): The first name of the author.
  - **lastName** (string): The last name of the author.
  - **avatar** (string): The filename of the author's avatar image.
- **tags** (array): An array of tags associated with the blog post.
- **likes** (array): An array of users who have liked the blog post.
- **comments** (array): An array of comments posted on the blog post.
- **createdAt** (string): The timestamp indicating when the blog post was created.

### Method: GET

> ```
> {{BASE_URL}}/blogs/2fe4e76d3c093004d58f
> ```

### Headers

| Content-Type | Value |
| ------------ | ----- |
| sdfsdf       |       |

### Body (**raw**)

```json

```

### 🔑 Authentication noauth

| Param | value | Type |
| ----- | ----- | ---- |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Blog

This API endpoint allows users to update an existing blog post. Users must provide the blog ID in the URL to specify the blog post they want to update. Authentication using a bearer token is required to access this endpoint. Users can update the thumbnail, title, content, and tags of the blog post.

## Endpoint

`PATCH {{BASE_URL}}/blogs/`

## Request

### cURL Example

```bash
curl --location --request PATCH 'http://localhost:3000/blogs/2d716ab74691a2c5c964' \
--header &#x27;Authorization: Bearer <access_token>&#x27; \
--form 'thumbnail=@"/path/to/file"' \
--form 'title=""' \
--form 'content=""' \
--form 'tags=""'

```

### Form Data Description

| Field Name | Description                                                 | Field Type |
| ---------- | ----------------------------------------------------------- | ---------- |
| thumbnail  | Update Thumbnail. Only images are allowed, max size 5 MB.   | File       |
| title      | Optional. Text field to update the blog title.              | String     |
| content    | Optional. Text field to update the blog content.            | String     |
| tags       | Optional. Text field to update blog tags (comma-separated). | String     |

## Response

### Success Response

Upon successfully updating the blog post, the API returns the updated details of the blog post.

```json
{
  "id": "2d716ab74691a2c5c964",
  "title": "New JavaScript Version is Available",
  "content": "Hello",
  "thumbnail": "test",
  "author": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": null
  },
  "tags": ["a"],
  "likes": 0,
  "comments": []
}
```

### Response Body Parameters

- **id** (string): The unique identifier of the blog post.
- **title** (string): The updated title of the blog post.
- **content** (string): The updated content of the blog post.
- **thumbnail** (string): The filename of the updated thumbnail image associated with the blog post.
- **author** (object): Information about the author of the blog post.
  - **id** (string): The unique identifier of the author.
  - **firstName** (string): The first name of the author.
  - **lastName** (string): The last name of the author.
  - **avatar** (string): The filename of the author's avatar image.
- **tags** (array): An array of updated tags associated with the blog post.
- **likes** (integer): The number of likes on the blog post.
- **comments** (array): An array of comments posted on the blog post.

### Method: PATCH

> ```
> {{BASE_URL}}/blogs/2d716ab74691a2c5c964
> ```

### Headers

| Content-Type | Value |
| ------------ | ----- |
| sdfsdf       |       |

### Body formdata

| Param     | value | Type |
| --------- | ----- | ---- |
| thumbnail |       | file |
| title     |       | text |
| content   |       | text |
| tags      |       | text |

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Blog

This API endpoint allows users to delete an existing blog post. Users must provide the blog ID in the URL to specify the blog post they want to delete. Authentication using a bearer token is required to access this endpoint.

## Endpoint

`DELETE {{BASE_URL}}/blogs/`

## Request

### cURL Example

```bash
curl --location --request DELETE 'http://localhost:3000/blogs/2d716ab74691a2c5c964' \
--header &#x27;Authorization: Bearer <access_token>&#x27;

```

## Response

### Success Response

Upon successfully deleting the blog post, the API returns a success message.

```json
{
  "message": "Blog deleted successfully"
}
```

### Response Body Parameters

| Parameter | Description                                                | Data Type |
| --------- | ---------------------------------------------------------- | --------- |
| message   | A message confirming successful deletion of the blog post. | String    |

---

### Method: DELETE

> ```
> {{BASE_URL}}/blogs/2d716ab74691a2c5c964
> ```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Blogs

This API endpoint allows users to retrieve a list of blogs. Users can specify the page number using the `page` query parameter to paginate through the blog posts. By default, if the `page` parameter is not provided, the default page is set to 1. Each response will contain 10 blogs by default. Users can also specify the maximum number of blogs to retrieve using the `limit` query parameter.

## Endpoint

`GET {{BASE_URL}}/blogs?page=`

## Query Parameters

| Parameter | Description                                                                                       | Default Value |
| --------- | ------------------------------------------------------------------------------------------------- | ------------- |
| page      | The page parameter allows you to specify the page number of blogs that the API will retrieve.     | 1             |
| limit     | The limit parameter allows you to specify the maximum number of blogs that the API will retrieve. | 10            |

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/blogs?page=1'

```

## Response

### Success Response

Upon successfully retrieving the blog posts, the API returns a list of blogs along with metadata.

```json
{
  "total": 13,
  "page": 1,
  "limit": 10,
  "blogs": [
    {
      "id": "4787eebfbc2645e977c9",
      "title": "Title",
      "content": "Hello...",
      "thumbnail": null,
      "author": {
        "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
        "firstName": "Saad",
        "lastName": "Hasan",
        "avatar": null
      },
      "tags": "javascript, async",
      "likes": [],
      "comments": []
    }
    // ... more blogs
  ]
}
```

### Response Body Parameters

| Parameter | Description                                     | Data Type        |
| --------- | ----------------------------------------------- | ---------------- |
| total     | The total number of blog posts available.       | Integer          |
| page      | The current page number of the retrieved blogs. | Integer          |
| limit     | The maximum number of blogs per page.           | Integer          |
| blogs     | An array containing the blog posts.             | Array of Objects |

---

### Method: GET

> ```
> {{BASE_URL}}/blogs?page=1
> ```

### Query Params

| Param | value |
| ----- | ----- |
| limit |       |
| page  | 1     |

### 🔑 Authentication noauth

| Param | value | Type |
| ----- | ----- | ---- |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Like

This endpoint allows users to like a specific blog post. Upon successful execution, the response will indicate whether the blog post has been liked, and provide an array of likes.

### Request Body

This POST request does not require a request body.

### Response

- `isLiked` (boolean): Indicates whether the blog post has been liked.
- `likes` (array): An array of likes for the specified blog post.

Example response:

```json
{
  "isLiked": true,
  "likes": [
    {
      "id": "10719efe-0f78-4f86-9377-5d804dedecdf"
    }
  ]
}
```

### Method: POST

> ```
> {{BASE_URL}}/blogs/7c12b4b48531bcc995ae/like
> ```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Profile

## End-point: Single Profile

This API endpoint allows users to retrieve their profile information, including details about their account, favorites, authored blogs, and more. Users must provide their user ID in the URL to access their profile information. Authentication using a bearer token is required to access this endpoint.

## Endpoint

`GET {{BASE_URL}}/profile/`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/profile/10719efe-0f78-4f86-9377-5d804dedecdf' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcwODc1MjIwNCwiZXhwIjoxNzA4NzU1ODA0fQ.D7HaXWO12MgGX9kHqxtk5oMPcenGb_sv48YCKZJneWk'

```

## Response

### Success Response

Upon successfully retrieving the user profile information, the API returns details about the user's account, favorites, authored blogs, and more.

```json
{
  "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
  "email": "saad.hasan2@gmail.com",
  "firstName": "Saad",
  "lastName": "Hasan",
  "avatar": "avatar-1708589704280-90672434.jpeg",
  "favourites": [
    {
      "id": "2fe4e76d3c093004d58f",
      "title": " async/await a good idea? 🤔 async/await vs promises"
    }
  ],
  "bio": "I am Saad Hasan, self-taught Junior Software Developer from Bangladesh. I have been working as a Professional Frontend Developer for the last 1 year, Though I started my Self-Taught Programming Journey In 2014.",
  "blogs": [
    {
      "id": "4787eebfbc2645e977c9",
      "title": "Title",
      "content": "Hello",
      "thumbnail": null,
      "author": {
        "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
        "firstName": "Saad",
        "lastName": "Hasan",
        "avatar": null
      },
      "tags": "[\"a\"]",
      "likes": 0,
      "comments": []
    }
  ]
}
```

### Response Body Parameters

| Parameter  | Description                                                         | Data Type        |
| ---------- | ------------------------------------------------------------------- | ---------------- |
| id         | The unique identifier of the user.                                  | String (UUID)    |
| email      | The email address associated with the user's account.               | String           |
| firstName  | The first name of the user.                                         | String           |
| lastName   | The last name of the user.                                          | String           |
| avatar     | The file name of the user's avatar image.                           | String           |
| favourites | An array containing details of the user's favorite blog posts.      | Array of Objects |
| bio        | The biography or description provided by the user.                  | String           |
| blogs      | An array containing details of the blog posts authored by the user. | Array of Objects |

---

### Method: GET

> ```
> {{BASE_URL}}/profile/10719efe-0f78-4f86-9377-5d804dedecdf
> ```

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Profile

This API endpoint allows users to update their profile information, including first name, last name, biography, and avatar image. Users must provide their bearer token for authentication and the updated profile details. Upon successful update, the API returns a message confirming the profile update along with the updated user profile information.

## Endpoint

`PATCH {{BASE_URL}}/profile`

## Request

### cURL Example

```bash
curl --location --request PATCH 'http://localhost:3000/profile' \
--header &#x27;Authorization: Bearer <access_token>&#x27; \
--form 'firstName="Saad"' \
--form 'lastName="Hasan"' \
--form 'bio="I am Saad Hasan, self-taught Junior Software Developer from Bangladesh. I have been working as a Professional Frontend Developer for the last 1 year, Though I started my Self-Taught Programming Journey In 2014."' \
--form 'avatar=@"/home/saad/Pictures/-2147483648_-220821.jpg"'

```

### Form Data Parameters

| Field     | Description                                       | Type   |
| --------- | ------------------------------------------------- | ------ |
| firstName | The updated first name of the user.               | String |
| lastName  | The updated last name of the user.                | String |
| bio       | The updated biography or description of the user. | String |
| avatar    | The updated avatar image file of the user.        | File   |

## Response

### Success Response

Upon successfully updating the user profile information, the API returns a success message along with the updated user profile details.

```json
{
  "message": "User profile updated successfully",
  "user": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "email": "saad.hasan2@gmail.com",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": "avatar-1708754588198-999077549.jpeg",
    "favourites": [
      {
        "id": "2fe4e76d3c093004d58f",
        "title": " async/await a good idea? 🤔 async/await vs promises"
      }
    ],
    "bio": "I am Saad Hasan, self-taught Junior Software Developer from Bangladesh. I have been working as a Professional Frontend Developer for the last 1 year, Though I started my Self-Taught Programming Journey In 2014."
  }
}
```

### Response Body Parameters

| Parameter  | Description                                                    | Data Type        |
| ---------- | -------------------------------------------------------------- | ---------------- |
| message    | A message indicating the success of the operation.             | String           |
| user       | An object containing the updated user profile information.     | Object           |
| id         | The unique identifier of the user.                             | String (UUID)    |
| email      | The email address associated with the user's account.          | String           |
| firstName  | The updated first name of the user.                            | String           |
| lastName   | The updated last name of the user.                             | String           |
| avatar     | The file name of the user's updated avatar image.              | String           |
| favourites | An array containing details of the user's favorite blog posts. | Array of Objects |
| bio        | The updated biography or description provided by the user.     | String           |

---

### Method: PATCH

> ```
> {{BASE_URL}}/profile
> ```

### Body formdata

| Param     | value                                                                                                                                                                                                              | Type |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| firstName | Saad                                                                                                                                                                                                               | text |
| lastName  | Hasan                                                                                                                                                                                                              | text |
| bio       | I am Saad Hasan, self-taught Junior Software Developer from Bangladesh. I have been working as a Professional Frontend Developer for the last 1 year, Though I started my Self-Taught Programming Journey In 2014. | text |
| avatar    | /home/saad/Pictures/-2147483648\_-220821.jpg                                                                                                                                                                       | file |

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Upload Profile Picture

This API endpoint allows users to update their avatar image. Users must provide their bearer token for authentication and the path to the new avatar image file. Upon successful upload, the API returns a message confirming the avatar update along with the updated user profile information.

## Endpoint

`POST {{BASE_URL}}/profile/avatar`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/profile/avatar' \
--header &#x27;Authorization: Bearer <access_token>&#x27; \
--form 'avatar=@"/home/saad/Pictures/22261152.jpeg"'

```

### Form Data Parameters

| Field  | Description                          | Type |
| ------ | ------------------------------------ | ---- |
| avatar | The new avatar image file to upload. | File |

## Response

### Success Response

Upon successfully uploading the new avatar image, the API returns a success message along with the updated user profile information.

```json
{
  "message": "Avatar uploaded successfully",
  "user": {
    "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
    "email": "saad.hasan2@gmail.com",
    "firstName": "Saad",
    "lastName": "Hasan",
    "avatar": "avatar-1708754588198-999077549.jpeg",
    "favourites": [
      {
        "id": "2fe4e76d3c093004d58f",
        "title": " async/await a good idea? 🤔 async/await vs promises"
      }
    ],
    "bio": "I am Saad Hasan, self-taught Junior Software Developer from Bangladesh. I have been working as a Professional Frontend Developer for the last 1 year, Though I started my Self-Taught Programming Journey In 2014."
  }
}
```

### Response Body Parameters

| Parameter  | Description                                                    | Data Type        |
| ---------- | -------------------------------------------------------------- | ---------------- |
| message    | A message indicating the success of the operation.             | String           |
| user       | An object containing the updated user profile information.     | Object           |
| id         | The unique identifier of the user.                             | String (UUID)    |
| email      | The email address associated with the user's account.          | String           |
| firstName  | The first name of the user.                                    | String           |
| lastName   | The last name of the user.                                     | String           |
| avatar     | The file name of the user's new avatar image.                  | String           |
| favourites | An array containing details of the user's favorite blog posts. | Array of Objects |
| bio        | The biography or description provided by the user.             | String           |

---

### Method: POST

> ```
> {{BASE_URL}}/profile/avatar
> ```

### Body formdata

| Param  | value                        | Type |
| ------ | ---------------------------- | ---- |
| avatar | /home/saad/Pictures/saad.jpg | file |

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Images

## End-point: Blog Thumbnail

### Get Blog Thumbnail Image

This endpoint allows users to retrieve blog thumbnail image by providing the URL of the image.

#### Endpoint

```
GET /uploads/blog/thumbnail-1708589704280-90672434.jpeg

```

#### Request

```bash
curl --location 'http://localhost:3000/uploads/blog/thumbnail-1708589704280-90672434.jpeg'

```

#### Description

This endpoint retrieves the blog thumbnail image associated with the user's profile. The image is served in JPEG format.

#### Response

The response is the binary data of the image in JPEG format.

#### Example

```bash
curl --location 'http://localhost:3000/uploads/avatar/avatar-1708589704280-90672434.jpeg' -O

```

### Method: GET

> ```
> {{BASE_URL}}/uploads/blog/thumbnail-1708703405446-607606083.jpeg
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Avatar

### Get Avatar Image

This endpoint allows users to retrieve their avatar image by providing the URL of the image.

#### Endpoint

```
GET /uploads/avatar/avatar-1708589704280-90672434.jpeg

```

#### Request

```bash
curl --location 'http://localhost:3000/uploads/avatar/avatar-1708589704280-90672434.jpeg'

```

#### Description

This endpoint retrieves the avatar image associated with the user's profile. The image is served in JPEG format.

#### Response

The response is the binary data of the image in JPEG format.

#### Example

```bash
curl --location 'http://localhost:3000/uploads/avatar/avatar-1708589704280-90672434.jpeg' -O

```

### Method: GET

> ```
> {{BASE_URL}}/uploads/avatar/avatar-1708589704280-90672434.jpeg
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Search

This API endpoint allows users to search for blog posts based on a query string. Users can provide a search query using the `q` parameter in the URL. Authentication using a bearer token is required to access this endpoint.

## Endpoint

`GET {{BASE_URL}}/search?q={query}`

## Request

### cURL Example

```bash
curl --location 'http://localhost:3000/search?q=await' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNzE5ZWZlLTBmNzgtNGY4Ni05Mzc3LTVkODA0ZGVkZWNkZiIsImVtYWlsIjoic2FhZC5oYXNhbjJAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcwODcwMTc5MywiZXhwIjoxNzA4NzA1MzkzfQ.J6mH8CDp3ybwoCCk9BuykLUrwHYmorIqnSHaCGZ_Iy4'

```

### Request Parameters

- **q** (string): The search query.

## Response

### Success Response

```json
{
  "length": 2,
  "query": "await",
  "data": [
    {
      "id": "1b18c0a27c245aea0312",
      "title": " async/await a good idea? 🤔 async/await vs promises",
      "content": "Undemplex phenomenon often referred to as \"callback hell.\"",
      "thumbnail": "thumbnail-1708704041451-647757489.jpeg",
      "author": {
        "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
        "firstName": "Saad",
        "lastName": "Hasan",
        "avatar": "avatar-1708589704280-90672434.jpeg"
      },
      "tags": ["async", "js", "javascript"],
      "likes": [],
      "comments": [],
      "createdAt": "2024-02-23T16:00:41.463Z"
    },
    {
      "id": "2fe4e76d3c093004d58f",
      "title": " async/await a good idea? 🤔 async/await vs promises",
      "content": "",
      "thumbnail": "thumbnail-1708704068214-912948094.jpeg",
      "author": {
        "id": "10719efe-0f78-4f86-9377-5d804dedecdf",
        "firstName": "Saad",
        "lastName": "Hasan",
        "avatar": "avatar-1708589704280-90672434.jpeg"
      },
      "tags": ["async", "js", "javascript"],
      "likes": [],
      "comments": [],
      "createdAt": "2024-02-23T16:01:08.230Z"
    }
  ]
}
```

### Response Body Parameters

- **length** (integer): The number of blog posts matching the search query.
- **query** (string): The search query.
- **data** (array): An array of blog posts matching the search query. Each object in the array contains detailed information about a blog post.
  - **id** (string): The unique identifier of the blog post.
  - **title** (string): The title of the blog post.
  - **content** (string): The content of the blog post.
  - **thumbnail** (string): The filename of the thumbnail image associated with the blog post.
  - **author** (object): Information about the author of the blog post.
    - **id** (string): The unique identifier of the author.
    - **firstName** (string): The first name of the author.
    - **lastName** (string): The last name of the author.
    - **avatar** (string): The filename of the author's avatar image.
  - **tags** (array): An array of tags associated with the blog post.
  - **likes** (array): An array of users who have liked the blog post.
  - **comments** (array): An array of comments posted on the blog post.
  - **createdAt** (string): The timestamp indicating when the blog post was created.

### Method: GET

> ```
> {{BASE_URL}}/search?q=await
> ```

### Query Params

| Param | value |
| ----- | ----- |
| q     | await |

### 🔑 Authentication bearer

| Param | value            | Type   |
| ----- | ---------------- | ------ |
| token | {{ACCESS_TOKEN}} | string |
