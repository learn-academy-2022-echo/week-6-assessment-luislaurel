# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Well I believe the easiest fix would be to do a db:rollback, this is what I've used in my experience working with rails. If the error has been identified right away. But If it hasn't I think we would have to use migrations, I'm not too sure exactly what that would be though. The foreign key would be student.
   
Researched answer:

So upon further research you would have to do rails db:rollback to undo the latest migration. You would then have to update the schema file. The name of the foreign key would be the cohort_id and the foreign key would be on the student model. Because Student belongs_to cohort.


2. Which RESTful routes must always be passed params? Why?

Your answer: The ones I know require are destroy,show,update and edit. They need an id in order perform what they are doing. I can't just destroy nothing.

Researched answer: 

Destroy, Show, Update, Edit are the REStful routes that require params. This is because there is a specific piece of data that must be identified to modify. For example if I wanted to Destroy something that method would require an ID because it needs to be told what to delete. 

3. Name three rails generator commands. What is created by each?

Your answer:

rails generate model Fish color:string, age:integer - This would create a model with the name of Fish, and columns with the name of color, age. The data type for each column is what follows after the colon. 


rails generate controller - This would create a controller for us. All of the methods would end up being added here.

rails generate rspec:install - This would add the needed dependencies for rspec testing. We would then see a rspec file with files for testing.


Researched answer:
There are many generate commands, a few that I have worked with are generate controller, rspec:install and model.
 These generate commands are apart of what make working with rails much more convenient. We don't have to the extra work of creating the files that will be added when these commands are ran. 

rails generate model Fish color:string, age:integer - This would create a model with the name of Fish, and columns with the name of color, age. The data type for each column is what follows after the colon. 


rails generate controller - This would create a controller for us. All of the methods would end up being added here.

rails generate rspec:install - This would add the needed dependencies for rspec testing. We would then see a rspec file with files for testing.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index - Used to get all the data being stored in students

action: "POST" location: /students

Create - this is how a new addition would be added to the database


action: "GET" location: /students/new

New - HTML form for creating a new student.

action: "GET" location: /students/2

Show - This shows a specific item which in this case would have an id of 2.

action: "GET" location: /students/2/edit

Edit - This would be an HTML form. This is how you would update an item. This items ID is 2.

action: "PATCH" location: /students/2

Update - How you would update an existing item. 

action: "DELETE" location: /students/2

Destroy - You would remove item with ID 2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


Story 1 - User is able to see title of task
Story 2 - User can see a description of task
Story 3 - User can create a new task
Story 4 - User can update task
Story 5 - User can mark each task complete/incomplete
Story 6 - User can choose to delete task
Story 7 - User is able to see each task with its own page
Story 8 - User can add his or someone else's name for each task
Story 9 - User can set a date for each task
Story 10 - User can set a time for each task
