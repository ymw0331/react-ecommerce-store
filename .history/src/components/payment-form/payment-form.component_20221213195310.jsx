import { async } from "@firebase/util"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import { PaymentFormContainer, FormContainer } from "./payment-form.styles"
const PaymentForm = () => {

  const paymentHandler = async (e) => {
    const stripe = useStripe();
    
    
    e.preventDefault();
  }

  return (

    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Car Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm

