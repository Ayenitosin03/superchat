import {
	addSuperchatUsers,
	setFetchingUsers,
} from "../actions/actionCreator.js";

const getSuperchatUsers = async (profileInstance, dispatch) => {
  // Get superchat users
  await profileInstance.methods.get_all_profile()
  .then((result) => {
    let users = result.decodedResult
    console.log(users);

    dispatch(addSuperchatUsers(users));
	  dispatch(setFetchingUsers()); // remove spinner
  }).catch((e) => {
    console.error(e.decodedError)
	  dispatch(setFetchingUsers()); // remove spinner
  });
};

export default getSuperchatUsers;
