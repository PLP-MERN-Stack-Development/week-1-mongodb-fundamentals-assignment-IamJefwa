**Week 1: MongoDB Fundamentals Assignment**


**Objective:**

- Apply MongoDB concepts learned throughout the week.
- Practice working with databases, collections, and documents.
- Develop skills in CRUD operations and data modeling.

**Instructions:**

1. **Setup MongoDB:**

   - Install MongoDB locally or create a free cluster on MongoDB Atlas.
   - Start the MongoDB server locally or connect to the MongoDB Atlas cluster.
   - Verify the installation and connection by running:
     ```sh
     mongo --version
     ```

2. **Database and Collection Creation:**

   - Create a new database called `library`.
   - Inside `library`, create a collection named `books`.

3. **Insert Data:**

   - Insert at least five book records into the `books` collection.
   - Each book should contain fields such as `title`, `author`, `publishedYear`, `genre`, and `ISBN`.

4. **Retrieve Data:**

   - Retrieve all books from the collection.
   - Query books based on a specific author.
   - Find books published after the year 2000.

5. **Update Data:**

   - Update the `publishedYear` of a specific book.
   - Add a new field called `rating` to all books and set a default value.

6. **Delete Data:**

   - Delete a book by its `ISBN`.
   - Remove all books of a particular genre.

7. **Data Modeling Exercise:**

   - Create a data model for an e-commerce platform including collections for `users`, `orders`, and `products`.
   - Decide on appropriate fields and relationships (embedding vs. referencing).
   - Implement the structure using MongoDB.

8. **Aggregation Pipeline:**

   - Use aggregation to find the total number of books per genre.
   - Calculate the average published year of all books.
   - Identify the top-rated book.

9. **Indexing:**

   - Create an index on the `author` field to optimize query performance.
   - Explain the benefits of indexing in MongoDB.

10. **Testing:**

   - Use the MongoDB shell or Compass to verify the inserted and updated records.
   - Ensure all queries return the expected results.

11. **Documentation:**

   - Create a `README.md` file with step-by-step instructions on setting up and running your database.

12. **Submission:**

   - Push your code and scripts to your GitHub repository.

**Evaluation Criteria:**

- Proper setup and connection of MongoDB.
- Accurate implementation of CRUD operations.
- Correct data modeling with appropriate relationships.
- Use of aggregation for insightful queries.
- Clear and concise documentation.
- Proper indexing implementation.


[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19655461&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 