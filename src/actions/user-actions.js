export const UPDATE_USER = 'user:updateUser';
export function updateUser(newUser){
  console.log("update user...");
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}
