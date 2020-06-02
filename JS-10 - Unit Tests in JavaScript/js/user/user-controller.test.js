const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
// Implement 1 test for the *add* function that verifies a user that is not in the users' list
test('add unknown user to userController', () => {
  let user = new User(2345, "Nia ", "niajohn345@gmail.com");
  userController.add(user);
  expect(userController.users).toContain(user); 
});

//Implement 1 test for the *remove* function that verifies a user that is not in the users' list
test('remove unknown user to userController', () => {
  let user = new User(2345, "Nia ", "niajohn345@gmail.com");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user); 
});

//Implement 2 unit tests for the *findByEmail* function

test('find use by email', () => {
  userController.findByEmail('niajohn345@gmail.com');
  expect(userController.findByEmail('niajohn345@gmail.com')).toEqual({"email":('niajohn345@gmail.com')
});

