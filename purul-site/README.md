# Purul Website

This folder contains a simple Node.js/Express web application with a static front end.
It demonstrates a small product API and can be deployed to AWS Elastic Beanstalk.

## Requirements
- Node.js 14 or later

## Local Development
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the server
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000` in your browser.

## Deploy to AWS Elastic Beanstalk
1. Install the [AWS Elastic Beanstalk CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).
2. Initialize your EB project:
   ```bash
   eb init -p node.js-14 purul-site
   ```
3. Create an environment and deploy:
   ```bash
   eb create purul-env
   eb open
   ```

AWS will provision the infrastructure and host the app using the Node.js platform.
