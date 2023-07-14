# Specification

## Endpoints

- Authorized
  - POST eateries/import - ASYNC
    - **Input:** list restaurants (specified by name, optionally instagram username)
    - **Action:** restaurant objects will be imported to Firestore with the use of Google API, Instagram API and crawling. Note that images should be dowloaded, imported to Firebase Storage and then referred to in the “image_url” attribute.
      - Operation should be async, operation id should be returned
    - **Output:** operation id
  - POST eateries/add
    - manual import where the whole restaurant object is passed
  - DELETE eateries/{id} - ASYNC
    - delete restaurant record in Firestore and other linked resources (images in Firebase Storage)
  - GET operation_status/{id}
    - returns operation status {FINISHED, FAILED, RUNNING, QUEUED} and message
- Public
  - GET /docs
    - OpenAPI (Swagger) documentation generated by FastAPI
  - POST /login
    - **Input:** username, password
    - **Output:** JWT token

## Recommended tech stack

- FastAPI
- multiprocessing or dramatiq with rabbitmq (if needed)
- Pydantic and BaseSettings (API keys, URLs, etc.)
- Authorization via JWT token in request header “Authorization: Bearer \<token\>”
- REDIS for operation status records