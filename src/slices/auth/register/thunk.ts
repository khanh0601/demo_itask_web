//Include Both Helper File with needed methods
import { APIClient } from "../../../helpers/api_helper";
import { registerUserAPI,getUserByEmail } from "../../../helpers/url_api";
// action
import {
  registerUserSuccessful,
  registerUserFailed,
  resetRegisterFlagChange,
} from "./reducer";
const api = new APIClient();
interface userInfo{
  email:string,
  password:string,
}
export const registerUser = (user : any) => async (dispatch : any) => {
  try {
    let response;
      try {
        var userInfo:userInfo={
          email: user.email,
          password: user.password
        }
       response = await api.create(registerUserAPI, userInfo);
        console.log('Kết quả:', response.data);
     
        dispatch(registerUserSuccessful({ user: response.data } as any));
        // Xử lý kết quả ở đây
      } catch (error:any) {
        console.error('Lỗi:', error);
        const registrationError:string = error.response.data.error.message;
        dispatch(registerUserFailed(registrationError));
      }
      // yield put(registerUserSuccessful(response));

  } catch (error : any) {
    dispatch(registerUserFailed(error));
  }
};

export const checkEmail = async (email: string): Promise<boolean> => {
    try{
      const params = {
        email: email
      };
    // const apiUrl=getUserByEmail+'?email='+email;
      const response = await api.get(getUserByEmail,params);
      console.log(response)
      if(response.data) {
        return true;
      }
      else{
        return false;
      }
    }
    catch(error){
      console.log(error);
      return false;
    }
  }

export const resetRegisterFlag = () => {
  try {
    const response = resetRegisterFlagChange();
    return response;
  } catch (error) {
    return error;
  }
};