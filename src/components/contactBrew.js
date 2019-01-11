import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'

class ContactBrew extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          formName: 'Info Request',
        }}
        validationSchema
        onSubmit={async function(values, actions) {
          console.log(values)
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
        }}
        render={({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleSubmit,
          isValid,
          setFieldValue,
          validate,
        }) => (
          <Form onSubmit={handleSubmit} onSubmitCapture={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
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
            <label htmlFor="phone">Phone of contact person:</label>
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
                touched['Company Name'] && errors['Company Name']
                  ? 'invalid'
                  : ''
              }
              id="company"
              type="text"
              name="Company Name"
            />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </button>
          </Form>
        )}
      />
    )
  }
}

export default ContactBrew
