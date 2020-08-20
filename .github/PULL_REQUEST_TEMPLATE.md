### What does this PR do?
Have the end point to get a specific political party working

### Description of Task to be completed?
User should get a specific political party

### How should this be manually tested?
* Clone the repo by git clone by : git clone https://github.com/Nduhiu17/politico-server.git
* Navigate into the project by: cd political-server
* Install a virtual environment by: python3.6 -m venv virtual
* Install dependancies by: pip install -r requirements.txt
* Set server's secret key by:
export SECRET_KEY='put-your-secret-key-here'
* Export your database url by:
export DATABASE_URL="postgres://yourusername:yourpassword@localhost:5432/your-test-db-name"
* Run the server by: python manage.py server
* Hit the following endpoint with postman: http://127.0.0.1:5000/api/v2/auth/signup['POST']

### What are the relevant pivotal tracker stories?
https://www.pivotaltracker.com/story/show/163917625

### Screenshot

