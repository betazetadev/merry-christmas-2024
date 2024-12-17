# Use the official Nginx image
FROM nginx:latest

# Copy your static files into the Nginx default html folder
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80
