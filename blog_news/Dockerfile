# Use the official AWS Lambda Node.js 20.x base image
FROM public.ecr.aws/lambda/nodejs:20

# Copy the project files into the Docker image
COPY . ${LAMBDA_TASK_ROOT}

# Install dependencies
RUN npm install

# Build the Next.js project
RUN npm run build

# Command to run the Lambda function
CMD ["index.handler"]