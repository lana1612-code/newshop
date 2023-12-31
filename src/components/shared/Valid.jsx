import * as yup from 'yup';
export const validationSchema = yup.object(
    {
       userName:yup.string().required("the user name is requierd").min(3,"the least number is 3"),
       email:yup.string().required("the email is requierd").email(),
       password:yup.string().required("the password is requierd").min(5,"the least number is 5"),

    }
   );
   export const validationSchemaLogin = yup.object(
      {
         email:yup.string().required("the email is requierd").email(),
         password:yup.string().required("the password is requierd").min(5,"the least number is 5"),
  
      }
     );
     export const validationSchemaForget = yup.object(
      {
         email:yup.string().required("the email is requierd").email(),  
      }
     );
     export const validationSchemaOrder = yup.object(
      {
         phone:yup.string().required("the phone is requierd").min(9,"the least number is 9"),
         address:yup.string().required("the address is requierd"),
      });