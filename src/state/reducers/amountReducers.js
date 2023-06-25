const reducer = (state=0,action) =>
{
   if(action.type === 'Increase')
   {
    return (state + action.payload)
   }
   else if(action.type === 'Decrease')
   {
    return (state - action.payload)
   }
   else
   {
    return state;
   }
}

export default reducer;