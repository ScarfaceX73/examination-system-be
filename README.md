# examination-system-be

#Add this to the config/db.js file
#require('dotenv').config(); //Important

#.env
# MongoDB Connection String - Provide your mongo details here
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/questionnaireDB?retryWrites=true&w=majority

# Server Port
PORT=5000

# Environment (development or production)
NODE_ENV=development

Finally Run this command -> node ./seeders/questionSeeder.js //to seed the questions
