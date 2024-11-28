# DATABASE 
   postgressSQL
# CREATE TABLE IN DATABASE

CREATE TABLE school (
    id SERIAL PRIMARY KEY,                        
    name VARCHAR(100) NOT NULL CHECK (name <> ''),                   
    address TEXT NOT NULL CHECK (address <> ''),                         
    latitude float CHECK (latitude BETWEEN -90 AND 90), 
    longtitude float CHECK (longtitude BETWEEN -180 AND 180)
);

# API ENDPOINT
[
    {
        name:"list school",
        url:"https://educase-production.up.railway.app/listSchools",
        request.parameter:"/34.0522/-118.2437",
        method:GET,
    },
    {
        name:"add school",
        url:"https://educase-production.up.railway.app/addSchool",
        request.body:{name,address,latitude,longtitude},
        method:POST
    }
]

# STEP TO RUN LOCAL
step1: npm git clone https://github.com/PrajapatiVikrant/educase-api.git
step2: cd repo_name
step3: npm i
step4: npm run dev