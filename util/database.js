import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("app.db");

const createTable = async () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS todos (id TEXT PRIMARY KEY NOT NULL, title TEXT);",
      [],
      () => console.log("Table created successfully"),
      (_, error) => {
        console.log("Error creating table:", error);
        return false;
      }
    );
  });
};

const readAllTodos = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM todos;",
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => {
          console.log("Error fetching todos:", error);
          reject(error);
          return false;
        }
      );
    });
  });
};

const readTodo = async (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM todos WHERE id = ?;",
        [id],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => {
          console.log("Error fetching:", error);
          reject(error);
          return false;
        }
      );
    });
  });
};

const createTodo = async (todo) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      const id = Math.random().toString();
      tx.executeSql(
        "INSERT INTO todos (id, title) VALUES (?, ?);",
        [id, todo],
        () => resolve(),
        (_, error) => {
          console.log("Error saving todo:", error);
          reject(error);
          return false;
        }
      );
    });
  });
};

const updateTodo = async (id, title) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE todos SET title = ? WHERE id = ?;",
        [title, id],
        () => resolve(),
        (_, error) => {
          console.log("Error updating todo:", error);
          reject(error);
          return false;
        }
      );
    });
  });
};

const deleteTodo = async (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM todos WHERE id = ?;",
        [id],
        () => resolve(),
        (_, error) => {
          console.log("Error deleting todo:", error);
          reject(error);
          return false;
        }
      );
    });
  });
};

export {
  createTable,
  readAllTodos,
  readTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
