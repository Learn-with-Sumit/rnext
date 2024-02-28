# 🔐 FaceHook Server API Routes

## Getting started

Install All the packages

```bash
npm install
```

Start JSON server (with _JSON server Auth_ as middleware) :

```bash
npm run dev
```

## ⬇️ Documentation

Download as Json - [Download](https://github.com/Learn-with-Sumit/rnext/blob/5.15/backend-server/facehook-postman.json)

Preview as Documentation - [Preview](https://documenter.getpostman.com/view/9649334/2s9YyvBL56)



# 📁 Collection: Auth

## End-point: Registration

### Register User

This endpoint is used to register a new user.

#### Request Body

- email (text, required): The email address of the user.
- password (text, required): The password for the user account.
- firstName (text, required): The first name of the user.
- lastName (text, required): The last name of the user.

### Method: POST

> ```
> {{BASE_URL}}/auth/register
> ```

### Body (**raw**)

```json
{
  "email": "saadh393@mail.com",
  "password": "bestPassw0rd",
  "firstName": "Saad",
  "lastName": "Hasan"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Auth Login

This endpoint is used to authenticate a user and obtain a token for accessing protected resources.

#### Request Body

- email (text, required): The email of the user.
- password (text, required): The password of the user.

#### Response

- Status: 200 OK
- Content-Type: application/json
- user (object): Contains the user details including id, first name, last name, avatar, and email.
  - id (string): The unique identifier of the user.
  - firstName (string): The first name of the user.
  - lastName (string): The last name of the user.
  - avatar (string): The avatar of the user.
  - email (string): The email of the user.
- token (object): Contains the authentication token and refresh token.
  - token (string): The authentication token.
  - refreshToken (string): The refresh token.

### Method: POST

> ```
> {{BASE_URL}}/auth/login
> ```

### Body (**raw**)

```json
{
  "email": "saadh392@mail.com",
  "password": "bestPassw0rd"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Refresh Token

### Refresh Token

This endpoint is used to refresh the access token by providing the refresh token.

#### Request

- Method: POST
- URL: {{BASE_URL}}/auth/refresh-token
- Body:
  - refreshToken (string, required): The refresh token used to obtain a new access token.

#### Response

- Status: 200
- Content-Type: application/json
- { "token": "", "refreshToken": "" }

### Method: POST

> ```
> {{BASE_URL}}/auth/refresh-token
> ```

### Body (**raw**)

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1MTYwYTc0LWRhZmYtNDgwZS04OTUxLWQ0YmQyOTNjY2FhMSIsImVtYWlsIjoic2FhZGgzOTJAbWFpbC5jb20iLCJ0eXBlIjoicmVmcmVzaCIsImlhdCI6MTcwNzM3Nzc4OSwiZXhwIjoxNzA3NDY0MTg5fQ.FFHtq6rXMJ0otmwxdvRCU_8ZgcPCSCReKGa7DDvjzPY"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Posts

## End-point: Get Posts

### Method: GET

> ```
> {{BASE_URL}}/posts
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Single Post

### Method: GET

> ```
> {{BASE_URL}}/posts/e19554d0-bd02-4672-a01c-805c4eb6dbd8
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Post

### Method: PATCH

> ```
> {{BASE_URL}}/posts/cba6b034-be5f-4a0f-b01a-dafbed682cfc
> ```

### Body formdata

| Param   | value  | Type |
| ------- | ------ | ---- |
| content | Edited | text |

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Post

### Method: DELETE

> ```
> {{BASE_URL}}/posts/cba6b034-be5f-4a0f-b01a-dafbed682cfc
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Post

This endpoint allows you to create a new post. The request should be sent as an HTTPS POST to {{BASE_URL}}/posts with a JSON payload in the raw request body. The payload should include the "postType" (text, image, or both) and "body" of the post.

### Request Body

- `postType` (string): Indicates the type of the post (text, image, or both).
- `body` (string): The content of the post.

### Response

Upon successful creation, the server will respond with a status code of 201 and a JSON object containing the details of the newly created post. The response includes the "postType" and "body" of the post, along with information about the author, comments, likes, creation timestamp, and post ID.

Example Response:

```json
{
  "postType": "text",
  "body": "Grateful for the incredible experience...",
  "image": null,
  "author": {
    "email": "",
    "firstname": "",
    "lastname": "",
    "id": 0
  },
  "comments": [],
  "likes": [],
  "createAt": "",
  "id": 0
}
```

### Method: POST

> ```
> {{BASE_URL}}/posts
> ```

### Body formdata

| Param    | value                                                                                                                                                                                                                                                                                        | Type |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| postType | Hello                                                                                                                                                                                                                                                                                        | text |
| content  | While ESLint is designed to be run on the command line, it’s possible to use ESLint programmatically through the Node.js API. The purpose of the Node.js API is to allow plugin and tool authors to use the ESLint functionality directly, without going through the command line interface. |

Note: Use undocumented parts of the API at your own risk. Only those parts that are specifically mentioned in this document are approved for use and will remain stable and reliable. Anything left undocumented is unstable and may change or be removed at any point.|text|
|image|/home/saad/Pictures/Screenshot 2023-11-19 at 9.48.02 PM.png|file|

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Like

This endpoint allows you to create a new post. The request should be sent as an HTTPS POST to {{BASE_URL}}/posts with a JSON payload in the raw request body. The payload should include the "postType" (text, image, or both) and "body" of the post.S

### Response

Upon successful creation, the server will respond with a status code of 201 and a JSON object containing the details of the newly created post. The response includes the "postType" and "body" of the post, along with information about the author, comments, likes, creation timestamp, and post ID.

Example Response:

```json
{
  "postType": "text",
  "body": "Grateful for the incredible experience...",
  "image": null,
  "author": {
    "email": "",
    "firstname": "",
    "lastname": "",
    "id": 0
  },
  "comments": [],
  "likes": [],
  "createAt": "",
  "id": 0
}
```

### Method: PATCH

> ```
> {{BASE_URL}}/posts/1/like
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Comment

This endpoint allows you to create a new post. The request should be sent as an HTTPS POST to {{BASE_URL}}/posts with a JSON payload in the raw request body. The payload should include the "postType" (text, image, or both) and "body" of the post.

### Response

Upon successful creation, the server will respond with a status code of 201 and a JSON object containing the details of the newly created post. The response includes the "postType" and "body" of the post, along with information about the author, comments, likes, creation timestamp, and post ID.

Example Response:

```json
{
  "postType": "text",
  "body": "Grateful for the incredible experience...",
  "image": null,
  "author": {
    "email": "",
    "firstname": "",
    "lastname": "",
    "id": 0
  },
  "comments": [],
  "likes": [],
  "createAt": "",
  "id": 0
}
```

### Method: PATCH

> ```
> {{BASE_URL}}/posts/1/comment
> ```

### Body (**raw**)

```json
{
  "comment": "Just Looking like a wow!"
}
```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Comment

This endpoint allows you to create a new post. The request should be sent as an HTTPS POST to {{BASE_URL}}/posts with a JSON payload in the raw request body. The payload should include the "postType" (text, image, or both) and "body" of the post.

### Response

Upon successful creation, the server will respond with a status code of 201 and a JSON object containing the details of the newly created post. The response includes the "postType" and "body" of the post, along with information about the author, comments, likes, creation timestamp, and post ID.

Example Response:

```json
{
  "postType": "text",
  "body": "Grateful for the incredible experience...",
  "image": null,
  "author": {
    "email": "",
    "firstname": "",
    "lastname": "",
    "id": 0
  },
  "comments": [],
  "likes": [],
  "createAt": "",
  "id": 0
}
```

### Method: DELETE

> ```
> {{BASE_URL}}/posts/1/comment/de3b3151-5d92-462e-b626-a1f5ca56a5f8
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Profile

## End-point: Profile

This endpoint retrieves the profile information for a specific user with the provided ID. The response will include details about the user's profile, such as their first name, last name, avatar, email, as well as their posts including post content, type, author details, comments, likes, and creation timestamp.

### Method: GET

> ```
> {{BASE_URL}}/profile/95160a74-daff-480e-8951-d4bd293ccaa1
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Profile

### Method: PATCH

> ```
> {{BASE_URL}}/profile/1
> ```

### Body (**raw**)

```json
{
  "firstname": "Saad",
  "lastName": "Hasan"
}
```

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Upload Avatar

### Method: POST

> ```
> {{BASE_URL}}/profile/1/avatar
> ```

### Body formdata

| Param  | value                                                       | Type |
| ------ | ----------------------------------------------------------- | ---- |
| avatar | /home/saad/Pictures/Screenshot 2023-11-19 at 9.48.02 PM.png | file |

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Preview Avatar

### Method: GET

> ```
> {{BASE_URL}}/uploads/images.png
> ```

### Body formdata

| Param  | value                                                       | Type |
| ------ | ----------------------------------------------------------- | ---- |
| avatar | /home/saad/Pictures/Screenshot 2023-11-19 at 9.48.02 PM.png | file |

### 🔑 Authentication bearer

| Param | value          | Type   |
| ----- | -------------- | ------ |
| token | {{AUTH_TOKEN}} | string |
