import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import { Transition, animated } from 'react-spring/renderprops'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  padding: 2rem;

  textarea {
    height: 100px;
    border-radius: 5px;
    font-family: inherit;
    font-weight: bold;
  }
  label {
    text-align: right;
  }
  input {
    width: 250px;
    border-radius: 5px;
  }
  fieldset input {
    width: 40px;
  }
  .invalid {
    background: #ff000055;
  }
  button {
    margin: 0 auto;
    width: 250px;
    grid-column: 1 / 3;
    background: #2b2b2b;
    border: none;
    height: 3rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px #333;
    color: white;
    cursor: pointer;

    :disabled {
      background-color: #aaa;
    }
  }
`

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
          <StyledForm onSubmit={handleSubmit} onSubmitCapture={handleSubmit}>
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
          </StyledForm>
        )}
      />
    )
  }
}

class TransitionContactBrew extends Component {
  state = {
    formSubmitted: false,
  }

  submitToggle = () => {
    this.setState(prevState => ({
      formSubmitted: !prevState.formSubmitted,
    }))
  }

  render() {
    return (
      <Transition
        items={this.state.formSubmitted}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {toggle =>
          !toggle
            ? styles => (
                <animated.div style={styles}>
                  <ContactBrew submitToggle={this.submitToggle} />
                </animated.div>
              )
            : styles => (
                <animated.h3 style={{ textAlign: 'center', ...styles }}>
                  Talk to you soon!
                </animated.h3>
              )
        }
      </Transition>
    )
  }
}

export default TransitionContactBrew
