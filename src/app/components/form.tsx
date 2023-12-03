'use client'
import { useFormik } from 'formik';
import { NextPage } from 'next';
import FormSchema from './validations';


const Form: NextPage = () => {
    // Formik hook to handle the form state
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: '',
        city: '',
        state: '',
        schoolName: ''
      },
      validationSchema: FormSchema,
      // Handle form submission
      onSubmit: async (value) => {
        console.log('value', value)
        // Make a request to your backend to store the data
      },
    });
  
    // Destructure the formik object
    const { errors, touched, values, handleChange, handleSubmit } = formik;
  
    return (
      <form onSubmit={handleSubmit} method="POST">
        
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          id="name"
        />
        {errors.firstName && touched.firstName && <span>{errors.firstName}</span>}
        
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          id="name"
        />
        {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
  
        
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
        />
        {errors.email && touched.email && <span>{errors.email}</span>}
  
       
        <input
          type="phoneNumber"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          id="phoneNumber"
        />
        {errors.phoneNumber && touched.phoneNumber && <span>{errors.phoneNumber}</span>}

        
        <input
          type="city"
          name="city"
          value={values.city}
          onChange={handleChange}
          id="city"
        />
        {errors.city && touched.city && <span>{errors.city}</span>}

       
        <input
          type="state"
          name="state"
          value={values.state}
          onChange={handleChange}
          id="state"
        />
        {errors.state && touched.state && <span>{errors.state}</span>}

        
        <input
          type="schoolName"
          name="schoolName"
          value={values.schoolName}
          onChange={handleChange}
          id="schoolName"
        />
        {errors.schoolName && touched.schoolName && <span>{errors.schoolName}</span>}

        
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Form;