educationapp
============

displaying different datasets about early childhood education 

This is how I imported the csv into a mongo collection: 

./mongoimport -h localhost:3001 --db meteor --collection noPreschool --type csv --file nopreschooldata.csv --fields Location,TimeFrame,DataFormat,Data
