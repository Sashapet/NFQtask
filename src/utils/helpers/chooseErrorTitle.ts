import { FormikErrors } from 'formik';

interface FormValues {
  username: string;
  password: string;
}
export interface errorProps {
  type: 'username' | 'password' | 'apiError' | null;
  text: string;
}

export const chooseErrorTitle = (errors: FormikErrors<FormValues>) => {
  // ERROR OBJ
  const errorState = {
    username: errors.username ? errors.username : '',
    password: errors.password ? errors.password : '',
  };
  const error: errorProps = { type: null, text: null };
  if (errorState.username) {
    error.text = errorState.username;
    error.type = 'username';
  } else if (errorState.password) {
    error.text = errorState.password;
    error.type = 'password';
  }
  return error;
};
