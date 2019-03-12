import React from 'react'
import { Formik, Field } from 'formik'
import StyledForm from './styledForm'

const ContactUs = ({ setShowForm, setSubmitMessage }) => {
  return (
    <Formik
      initialValues={{
        formName: 'Contact',
      }}
      validationSchema
      onSubmit={async function(values, actions) {
        const response = await (await fetch(
          '/.netlify/functions/airtable-api-proxy',
          {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        )).json()
        console.log(response)
        setShowForm(false)
        setSubmitMessage('Thank you!')
      }}
      render={({ touched, errors, isSubmitting, handleSubmit, isValid }) => (
        <StyledForm onSubmit={handleSubmit} onSubmitCapture={handleSubmit}>
          <h2>Let's Talk!</h2>
          <label htmlFor="name">Name:</label>
          <Field
            className={touched.name && errors.name ? 'invalid' : ''}
            id="name"
            type="text"
            name="Name"
            required
          />
          <label htmlFor="email">Email:</label>
          <Field
            className={touched.email && errors.email ? 'invalid' : ''}
            id="email"
            type="email"
            name="Email"
            required
          />
          {/* <ErrorMessage className="error" name="email" component={Error} /> */}
          <label htmlFor="needs">What are your needs?</label>
          <Field
            className={touched.message && errors.message ? 'invalid' : ''}
            id="needs"
            component="textarea"
            name="Needs"
            placeholder=""
            required
          />
          <label htmlFor="phone">Phone:</label>
          <Field
            className={touched.Phone && errors.Phone ? 'invalid' : ''}
            id="phone"
            type="tel"
            name="Phone"
            placeholder="optional"
          />
          <label htmlFor="company">Company Name</label>
          <Field
            className={
              touched['Company Name'] && errors['Company Name'] ? 'invalid' : ''
            }
            id="company"
            type="text"
            name="Company Name"
          />

          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </StyledForm>
      )}
    />
  )
}

export default ContactUs
