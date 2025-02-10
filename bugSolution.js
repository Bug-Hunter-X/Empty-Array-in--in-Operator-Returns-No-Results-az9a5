```javascript
function findDocuments(field, values) {
  if (values.length === 0) {
    // Handle empty array case: Return all documents
    return db.collection.find({});
  } else {
    return db.collection.find({field: {$in: values}});
  }
}
```