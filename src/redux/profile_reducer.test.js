import profileReducer, { addPostActionCreator, deletePost } from './profile_reducer';

//! test data
let state = {
  postsData: [
    { id: 1, text: 'Hi, how are you???', likesCount: 70 },
    { id: 2, text: "It's my first post.", likesCount: 50 },
    { id: 3, text: "It's my second post.", likesCount: 100 },
    { id: 4, text: "It's my next post.", likesCount: 80 }
  ]
}

test('length of posts should be incremented', () => {
  //! test data
  let action = addPostActionCreator("Hello everyone!");

  //! action
  let newState = profileReducer(state, action);

  //! expectation check (проверка ожидания)
  expect(newState.postsData.length).toBe(5);
});

test('text of new post should be corect', () => {
  //! test data
  let action = addPostActionCreator("Hello everyone!");

  //! action
  let newState = profileReducer(state, action);

  //! expectation check (проверка ожидания)
  expect(newState.postsData[4].text).toBe("Hello everyone!");
});

test('after deleting length of posts should be decremented', () => {
  //! test data
  let action = deletePost(1);

  //! action
  let newState = profileReducer(state, action);

  //! expectation check (проверка ожидания)
  expect(newState.postsData.length).toBe(3);
});

test("after deleting length of posts shouldn't be decremented if id is incorrect", () => {
  //! test data
  let action = deletePost(100);

  //! action
  let newState = profileReducer(state, action);

  //! expectation check (проверка ожидания)
  expect(newState.postsData.length).toBe(4);
});
