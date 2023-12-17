import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CustomCheckout = () => {
   const navigate = useNavigate();
   const stripe = useStripe();
   const elements = useElements();
   

   const [processing, setProcessing] = useState(false);
   const [error, setError] = useState(null);

   const handleCheckout = async () => {
     if (!stripe || !elements) {
       return;
     }

     setProcessing(true);

     try {
       const paymentMethodReq = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardNumberElement),
       });

       if (paymentMethodReq.error) {
         setError(`Payment Failed: ${paymentMethodReq.error.message}`);
         setProcessing(false);
         return;
       }

       navigate('/success');
     } catch (error) {
       console.error('Error during payment:', error);
       setError('An error occurred while processing your payment.');
     }

     setProcessing(false);
   };

   const cardStyle = {
     style: {
       base: {
         color: '#000',
         fontFamily: 'Roboto, sans-serif',
         fontSmoothing: 'antialiased',
         fontSize: '16px',
         '::placeholder': {
           color: '#606060',
         },
       },
       invalid: {
         color: '#fa755a',
         iconColor: '#fa755a',
       },
     },
   };

   return (
     <div>
       <h4>Enter Payment Details</h4>
       <div className='stripe-card'>
         <CardNumberElement className='card-element' options={cardStyle} 
          />
       </div>
       <div className='stripe-card'>
         <CardExpiryElement className='card-element' options={cardStyle} />
       </div>
       <div className='stripe-card'>
         <CardCvcElement className='card-element' options={cardStyle} />
       </div>
       <div className='submit-btn'>
         <button
           disabled={processing}
           className='button is-black nomad-btn submit'
           onClick={handleCheckout}
         >
           {processing? 'PROCESSING' : 'PAY'}
         </button>
       </div>
       {error && <p className='error-message'>{error}</p>}
     </div>
   );
};

export default CustomCheckout;
