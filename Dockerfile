# Gunakan image resmi Node.js
FROM node:18-alpine

# Set direktori kerja
WORKDIR /app

# Definisikan ARG untuk file environment
ARG ENV_FILE

# Salin file environment ke dalam image sebagai .env
COPY ${ENV_FILE} .env

# Salin file dependency
COPY package*.json ./

# Install dependency
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Expose port default Next.js
EXPOSE 3000

# Jalankan aplikasi Next.js
CMD ["npm", "start"]

