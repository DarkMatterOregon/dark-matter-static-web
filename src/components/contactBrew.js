import React, { Component } from 'react'
import { Formik, Field } from 'formik'

export default class ContactBrew extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          formName: 'Info Request',
        }}
        validationSchema
        onSubmit={async function(values, actions) {
          const response = await (await fetch('/.netlify/functions/airtable', {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(values),
          })).json()
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
              name="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <Field
              className={touched.email && errors.email ? 'invalid' : ''}
              id="email"
              type="email"
              name="email"
              required
            />
            {/* <ErrorMessage className="error" name="email" component={Error} /> */}
            <label htmlFor="message">Anything you would like us to know?</label>
            <Field
              className={touched.message && errors.message ? 'invalid' : ''}
              id="message"
              component="textarea"
              name="message"
              placeholder="I love learning! ;)"
              required
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
