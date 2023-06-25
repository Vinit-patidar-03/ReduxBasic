export const Increase = (amount)=>
{
   return (dispatch)=>
   {
     dispatch({
        type : 'Increase',
        payload : amount
     })
   }
}

export const Decrease = (amount)=>
{
   return (dispatch) =>
   {
     dispatch({
        type : 'Decrease',
        payload : amount
     })
   }
}