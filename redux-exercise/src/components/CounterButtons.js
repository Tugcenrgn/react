//Function yapısında redux kullanımı
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement,increment } from '../redux/counterSlice';

const CounterButtons = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Arttır</button>
            <button onClick={() => dispatch(decrement())}>Azalt</button>
        </div>
    );
};

export default CounterButtons;

//Class yapısında Redux kullanımı
// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { decrement, increment } from '../redux/counterSlice';

// class CounterButtons extends Component {
//     render() {
//         const { increase,decrease } = this.props;
//       return (
//           <div>
//               <button onClick={()=>increase()}>Arttır</button>
//               <button onClick={()=>decrease()}>Azalt</button>
//           </div>
//       );
//   }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increase: () => dispatch(increment()),
//         decrease:()=>dispatch(decrement()),
//     };
// };

// export default connect(null,mapDispatchToProps)(CounterButtons);