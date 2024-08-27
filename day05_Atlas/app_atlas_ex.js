const { MongoClient } = require('mongodb');

// 올바른 MongoDB URI를 사용합니다. 사용자 이름과 비밀번호를 정확히 입력하세요.
const uri = "mongodb+srv://lhh964513:1234@cluster0.3qa5l.mongodb.net/myDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    // MongoDB에 연결 시도
    await client.connect();
    console.log("Connected successfully to MongoDB server");

    // 데이터베이스 및 컬렉션 선택
    const database = client.db("myDatabase");
    const collection = database.collection("myCollection");

    // 문서 추가
    const doc = { name: "김범준", age: 23 };
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    // 문서 조회
    const query = { _id: result.insertedId };
    const fetch = await collection.findOne(query);
    console.log("Fetched document:", fetch);
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
