import { FormikErrors } from 'formik';

interface FormValues {
  username: string;
  password: string;
}

export const chooseErrorTitle = (errors: FormikErrors<FormValues>) => {
  // ERROR OBJ
  const errorState = {
    username: errors.username ? errors.username : '',
    password: errors.password ? errors.password : '',
  };
  let error = '';
  if (errorState.username) {
    error = errorState.username;
  } else if (errorState.password) {
    error = errorState.password;
  }
  return error;
};
