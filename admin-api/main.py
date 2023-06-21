from fastapi import FastAPI
from config import settings
from routers.api import api_router

app = FastAPI(title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json")
app.include_router(api_router, prefix="api/v1")
