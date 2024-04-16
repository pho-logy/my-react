// import { useReducer } from 'react';
//
//   function reducer(state, action) {
//     switch (action.type) {
//         case 'add':
//             return state + 1;
//         case 'dec':
//             return state - 1;
//         default:
//         //
//     }
// }
//
//   function myFunc() {
//     const [num, dispatch] = useReducer(reducer, 0);
//
//     return (
//         <div>
//             <button onClick={() => dispatch({ type: 'dec' })}>-</button>
//             <span>{num}</span>
//             <button onClick={() => dispatch({ type: 'add' })}>+</button>
//         </div>
//     )
// }
// export default myFunc;