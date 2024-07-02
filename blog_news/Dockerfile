# Use the official base image for AWS Lambda with Node.js 20
FROM public.ecr.aws/lambda/nodejs:20

# Copy application code
COPY . /var/task

# Install dependencies
RUN npm install

# Build the Next.js project
RUN npm run build

# Command to run the Lambda function
CMD ["handler.handler"]
