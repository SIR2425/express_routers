// Simulation of a database
// In-memory "database" for storing users
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Get all users
function getAllUsers() {
  return users;
}

// Get a user by ID
function getUserById(id) {
  return users.find(user => user.id === id);
}

// Add a new user
function addUser(name, email) {
  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    email
  };
  users.push(newUser);
  return newUser;
}

// Delete a user by ID
function deleteUserById(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById
};
