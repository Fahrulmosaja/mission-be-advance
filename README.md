# API INTEGRATION VIDEO-BELAJAR

## Video Belajar Backend

### Product Overview

Video Belajar Backend is a RESTful API service built to power and support self-learning platforms, providing structured access to learning content, users, and tutors.

#### API Endpoints Structure

**Authentication Routes** (`/api/v1/auth/`)

- `POST /register`

```json
{
  "meta": {
    "status": 200,
    "message": "Register Success"
  },
  "data": {
    "user_id": 10,
    "email": "student4@example.com",
    "role_id": null,
    "password": "$2b$10$28VAG/PDrTI2QKKT9D3m7ux1VlSsT9uNghYAxl6U2plRvNJiYPtXa",
    "username": "student4",
    "firsname": "student2",
    "lastname": "student2",
    "no_hp": null
  }
}
```

- `POST /login`

```json
{
  "meta": {
    "status": 200,
    "message": "Login success"
  },
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoic3R1ZGVudDRAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjA3MzA0NjcsImV4cCI6MTc2MDgxNjg2N30.kGSR5G-bzZ5UssT_2WWLyYWAL4iSRJOHoIhY4Hql5sA",
    "user": {
      "user_id": 10,
      "email": "student4@example.com",
      "role_id": null,
      "password": "$2b$10$28VAG/PDrTI2QKKT9D3m7ux1VlSsT9uNghYAxl6U2plRvNJiYPtXa",
      "username": "student4",
      "firsname": "student2",
      "lastname": "student2",
      "no_hp": null
    }
  }
}
```

- `GET /users`

```json
{
  "meta": {
    "status": 200,
    "message": "Login success"
  },
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoic3R1ZGVudDRAZXhhbXBsZS5jb20iLCJpYXQiOjE3NjA3MzA0NjcsImV4cCI6MTc2MDgxNjg2N30.kGSR5G-bzZ5UssT_2WWLyYWAL4iSRJOHoIhY4Hql5sA",
    "user": {
      "user_id": 10,
      "email": "student4@example.com",
      "role_id": null,
      "password": "$2b$10$28VAG/PDrTI2QKKT9D3m7ux1VlSsT9uNghYAxl6U2plRvNJiYPtXa",
      "username": "student4",
      "firsname": "student2",
      "lastname": "student2",
      "no_hp": null
    }
  }
}
```

- `GET /users/:id`

```json
{
  "meta": {
    "status": 200,
    "message": "success get detail user"
  },
  "data": {
    "user_id": 10,
    "email": "student4@example.com",
    "role_id": null,
    "password": "$2b$10$28VAG/PDrTI2QKKT9D3m7ux1VlSsT9uNghYAxl6U2plRvNJiYPtXa",
    "username": "student4",
    "firsname": "student2",
    "lastname": "student2",
    "no_hp": null,
    "Profile": null
  }
}
```

- `POST /user/:id`

```json
{
  "meta": {
    "status": 200,
    "message": "success updated profile"
  },
  "data": {
    "profile_id": 2,
    "firsname": "user",
    "lastname": "userlast",
    "no_hp": "12341234112",
    "job": "Freelance",
    "working_place": null,
    "gender": null,
    "country_code": null,
    "created_date": "2025-10-17T19:52:10.256Z",
    "updated_date": null,
    "user_id": 10
  }
}
```

- `POST /users/:id`

```json
{
  "meta": {
    "status": 200,
    "message": "User deleted"
  }
}
```

**Courses Routes** (`/api/v1/courses/`)

- `POST /` - Create product course

```json
{
  "meta": {
    "status": 201,
    "message": "success create course"
  },
  "data": {
    "course_id": 5,
    "course_name": "Belajar React",
    "description": "Kursus backend dasar menggunakan Node.js",
    "user_id": null,
    "category_id": null,
    "rating": null,
    "review_count": 0,
    "price": "200000",
    "duration": null,
    "certificate": false,
    "createdat": "2025-10-09T16:10:24.614Z",
    "updatedat": null
  }
}
```

- `GET /` - Get product course

  ```json
  {
    "meta": {
      "status": 200,
      "message": "success get course"
    },
    "data": [
      {
        "course_id": 5,
        "course_name": "Belajar React",
        "description": "Kursus backend dasar menggunakan Node.js",
        "user_id": null,
        "category_id": null,
        "rating": null,
        "review_count": 0,
        "price": "200000",
        "duration": null,
        "certificate": false,
        "createdat": "2025-10-09T16:10:24.614Z",
        "updatedat": null,
        "Category": null,
        "UserBase": null
      }
    ]
  }
  ```

- `GET /:id` - Get product course details

```json
{
  "meta": {
    "status": 200,
    "message": "success get course detail"
  },
  "data": {
    "course_id": 5,
    "course_name": "Belajar React",
    "description": "Kursus backend dasar menggunakan Node.js",
    "user_id": null,
    "category_id": null,
    "rating": null,
    "review_count": 0,
    "price": "200000",
    "duration": null,
    "certificate": false,
    "createdat": "2025-10-09T16:10:24.614Z",
    "updatedat": null,
    "Category": null,
    "UserBase": null,
    "Sections": []
  }
}
```

- `PUT /:id` - Update product course

  ```json
  {
    "meta": {
      "status": 200,
      "message": "success update course"
    },
    "data": {
      "course_id": 5,
      "course_name": "Belajar Node JS",
      "description": "Kursus backend dasar menggunakan Node.js",
      "user_id": null,
      "category_id": null,
      "rating": null,
      "review_count": 0,
      "price": "200000",
      "duration": null,
      "certificate": false,
      "createdat": "2025-10-09T16:10:24.614Z",
      "updatedat": null
    }
  }
  ```

- `DELETE /:id` - Delete product course

```json
{
  "meta": {
    "status": 200,
    "message": "success delete course"
  },
  "data": 5
}
```

**Health Check** (`/api/v1/healthcheck/`)

- `GET /` - System health status

```json
{
  "meta": {
    "status": 200,
    "message": "server is healthy"
  },
  "data": null
}
```
