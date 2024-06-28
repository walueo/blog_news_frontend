# Use the official Node.js 20.x image as the base image
FROM public.ecr.aws/lambda/nodejs:20

# Set the working directory
WORKDIR /var/task

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js project
RUN npm run build

# Command to run the Lambda function
CMD ["index.handler"]
