Here’s your complete README.md file in one markdown block:

# Dashboard App

This project runs inside Docker with PostgreSQL, Prisma migrations, and seed data.

## Getting Started

### 1. Build and Start Containers
Run the following command to build and start the containers in the background:

```bash
docker compose up -d --build

## 2. Run Database Migrations

After the containers are up, run Prisma migrations:

docker exec -it dashboard-api-1 npx prisma migrate dev --name init

## 3. Seed the Database

Next, seed the database with initial data:

docker exec -it dashboard-api-1 npm run seed:db

## 4. Access the App

Open your browser and go to:

http://localhost:3001/

Notes

The backend API container name is assumed to be dashboard-api-1. If your container has a different name, adjust the commands accordingly:

docker ps


then replace dashboard-api-1 with the correct container name.

Prisma is used for database migrations and seeding.
