import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  const requiredFields = [ 'firstName', 'lastName', 'streetAdress', 'postAdress', 'mobileNumber', 'email', 'verifyEmail', 'accept' ];
  requiredFields.forEach(field => {
      if (!values[ field ]) {
          errors[ field ] = 'Behöver fyllas i'
      }
  });

  // identityNumber
  if (values.identityNumber && isNaN(Number(values.identityNumber))) {
    errors.identityNumber = 'Måste endast innehålla siffror';
  }
  // co
  if (values.co && !/^[ a-zA-ZéäöåÄÖÅ]+$/i.test(values.co)) {
    errors.co = 'Måste endast innehålla bokstäver';
  }
  // firstName
  if (values.firstName && !/^[ a-zA-ZéäöåÄÖÅ]+$/i.test(values.firstName)) {
    errors.firstName = 'Måste endast innehålla bokstäver';
  }
  // lastName
  if (values.lastName && !/^[ a-zA-ZéäöåÄÖÅ]+$/i.test(values.lastName)) {
    errors.lastName = 'Måste endast innehålla bokstäver';
  }
  // streetAdress
  if (values.streetAdress && !/^[\w a-zA-ZéäöåÄÖÅ]+$/i.test(values.streetAdress)) {
    errors.streetAdress = 'Måste endast innehålla bokstäver och siffror';
  }
  // postAdress
  if (values.postAdress && !/^[\w a-zA-ZéäöåÄÖÅ]+$/i.test(values.postAdress)) {
    errors.postAdress = 'Måste endast innehålla bokstäver och siffror';
  }
  // mobileNumber
  if (values.mobileNumber && isNaN(Number(values.mobileNumber))) {
    errors.mobileNumber = 'Måste endast innehålla siffror utan mellanslag';
  }
  // email
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Felaktik struktur på emailaddress';
  }
  // verifyEmail
  if (values.email && values.verifyEmail && values.email !== values.verifyEmail) {
    errors.verifyEmail = "Stämmer inte med angiven emailadress";
  }
  return errors;
}

const renderInputField = ({ input, label, type, meta: { touched, error } }) => {

  const getValidationState = (touched, error) => {
      if (touched && error) { return 'form-group has-error' }
      else if (touched) { return 'form-group has-success' }
      else return 'form-group';
  };

  return (
    <div className={getValidationState(touched, error)}>
      <label className="control-label col-sm-3">{label}</label>
      <div className="col-sm-9">
        <input className="form-control" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span className="help-block">{error}</span>))}
      </div>
    </div>
  )
}

const DetailsForm = (props) => {

  const { handleSubmit, submitting, valid } = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field name="identityNumber" type="text" component={renderInputField} label="Personnummer"/>
      <Field name="co" type="text" component={renderInputField} label="c/o"/>
      <Field name="firstName" type="text" component={renderInputField} label="Förnamn *"/>
      <Field name="lastName" type="text" component={renderInputField} label="Efternamn *"/>
      <Field name="streetAdress" type="text" component={renderInputField} label="Gatuadress *"/>
      <Field name="postAdress" type="text" component={renderInputField} label="Postadress *"/>
      <Field name="mobileNumber" type="text" component={renderInputField} label="Mobilelefonnummer *"/>
      <Field name="email" type="email" component={renderInputField} label="E-post *"/>
      <Field name="verifyEmail" type="email" component={renderInputField} label="Bekräfta e-post *"/>
      <div className="checkbox" style={{marginBottom:'25px'}}>
        <label><Field name="newsletter" id="newsletter" component="input" type="checkbox" /> Ja tack, jag vill ha nyhetsbrev</label>
      </div>
      <div className="checkbox" style={{marginBottom:'5px'}}>
        <label style={{cursor:'default', color:'#ccc'}}><input type="checkbox" disabled/> Ange separat leveransadress</label>
      </div>
      <div>Obligatoriska fält *</div>
      <hr />
      <div style={{textAlign:'center'}}>
        <div className="checkbox" style={{marginBottom:'10px', marginTop:'20px'}}>
          <label><Field name="accept" id="accept" component="input" type="checkbox" /> Jag accepterar köpvillkor</label>
        </div>
        <button className="btn btn-default btn-black" type="submit" disabled={!valid || submitting}>Skicka beställning</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'DetailsForm',
  validate
})(DetailsForm);
