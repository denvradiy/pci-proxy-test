import dynamic from 'next/dynamic';

// const SecureFields = dynamic(() => import('@/src/components/SecureFields'), {
//   ssr: false,
// });

import SecureFields from '@/src/components/SecureFields'

var styles = {
  // set style to all elements, JSON accepted too
  "*": "border: 2px solid black;",

  // or with JSON
  //'*': {
  //    border: '2px solid black',
  //    padding: '.65em .5em'
  //    backgroundColor: 'blue',  // background-color
  //    backgroundImage: 'none',  // background-image
  //    boxSizing: 'border-box',  // box-sizing
  //    WebkitBoxShadow: 'none',  // -webkit-box-shadow
  //    WebkitAppearance: 'none'  // -webkit-appearance
  //}

  // ::hover on all elements
  "*::hover": "-webkit-box-shadow: none; -ms-box-shadow: none; -moz-appearance: none; ",

  // set style to one of the elements
  cardNumber: "font-weight: bold;",
  cvv: "color: green;",

  // setting style based on CSS classes (see 'Toggled classes')
  "cardNumber.valid:hover": "background-color: green;",
  "cardNumber.invalid:hover": "background-color: red;",

  // pseudoselectors
  '*:focus': 'border: 1px solid #66AFE9',
  '*:hover': 'border: 1px solid #66AFE9',
  '*::placeholder': 'color: red',
  '*:-ms-input-placeholder': 'color: #999999' // thanks MS :(
};

export default function Home() {
  return (
    <>
      <SecureFields config={{
        merchantID: '1100007006',
        fields: {
          cardNumber: {
            placeholderElementId: 'card-number',
            inputType: 'tel',
            placeholder: '0000 0000 0000 0000',
          },
          cvv: {
            placeholderElementId: 'cvv-number',
            inputType: 'tel'
          }
        },
        options: {
          styles
        }
      }}/>
    </>
  )
}
