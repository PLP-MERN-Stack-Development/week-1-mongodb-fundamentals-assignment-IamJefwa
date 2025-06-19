const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB successfully");
    
    const db = client.db("bookstore");
    const books = db.collection("books");

    // 1. CRUD Operations
    // a. Create (already done by insert_books.js)
    
    // b. Read - Find books by author
    console.log("\n=== Books by J.K. Rowling ===");
    const authorBooks = await books.find({ author: "J.K. Rowling" }).toArray();
    console.log(authorBooks);

    // c. Update - Change book price
    console.log("\n=== Updating Book Price ===");
    const updateResult = await books.updateOne(
      { title: "Harry Potter and the Sorcerer's Stone" },
      { $set: { price: 12.99 } }
    );
    console.log(`Modified ${updateResult.modifiedCount} document(s)`);

    // d. Delete - Remove book by ISBN
    console.log("\n=== Deleting Book ===");
    const deleteResult = await books.deleteOne({ ISBN: "978-0439708180" });
    console.log(`Deleted ${deleteResult.deletedCount} document(s)`);

    // 2. Advanced Queries
    // a. Filter books >300 pages published after 2010
    console.log("\n=== Long Books After 2010 ===");
    const longRecentBooks = await books.find({
      pages: { $gt: 300 },
      year: { $gt: 2010 }
    }).toArray();
    console.log(longRecentBooks);

    // b. Fantasy books sorted by price (descending)
    console.log("\n=== Fantasy Books by Price ===");
    const fantasyBooks = await books.find({ genre: "Fantasy" })
      .sort({ price: -1 })
      .toArray();
    console.log(fantasyBooks);

    // c. Projection - Title and author only
    console.log("\n=== Books (Title & Author Only) ===");
    const titlesAuthors = await books.find({})
      .project({ title: 1, author: 1, _id: 0 })
      .limit(5) // Show first 5 for brevity
      .toArray();
    console.log(titlesAuthors);

    // 3. Aggregation Pipelines
    // a. Books count per genre
    console.log("\n=== Book Count by Genre ===");
    const genreCounts = await books.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]).toArray();
    console.log(genreCounts);

    // b. Average price per genre
    console.log("\n=== Average Price by Genre ===");
    const avgPriceByGenre = await books.aggregate([
      { $group: { 
        _id: "$genre", 
        avgPrice: { $avg: "$price" },
        count: { $sum: 1 }
      } },
      { $project: {
        _id: 1,
        avgPrice: { $round: ["$avgPrice", 2] },
        count: 1
      }}
    ]).toArray();
    console.log(avgPriceByGenre);

    // c. Author with most books
    console.log("\n=== Most Prolific Author ===");
    const prolificAuthor = await books.aggregate([
      { $group: { _id: "$author", bookCount: { $sum: 1 } } },
      { $sort: { bookCount: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log(prolificAuthor);

    // 4. Indexing
    // a. Create index on title
    console.log("\n=== Creating Index ===");
    await books.createIndex({ title: 1 });
    console.log("Created index on 'title' field");

    // b. Explain query using index
    console.log("\n=== Query Explanation ===");
    const explainResult = await books.find({ title: "The Hobbit" })
      .explain("executionStats");
    console.log({
      executionTime: explainResult.executionStats.executionTimeMillis + "ms",
      totalDocsExamined: explainResult.executionStats.totalDocsExamined,
      indexUsed: explainResult.executionStats.executionStages.inputStage.stage === 'IXSCAN'
    });

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("\nConnection closed");
  }
}

main();
