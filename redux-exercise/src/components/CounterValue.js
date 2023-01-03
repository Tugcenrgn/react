//Function yapısında redux kullanımı
import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {
    const count = useSelector((state) => state.counter.value);
    return <div>{count}</div>;
};

export default CounterValue;


//Class yapısında Redux kullanımı
// import React, { Component } from 'react'
// import { connect } from 'react-redux';

//  class CounterValue extends Component {
//      render() {
//          const { value } = this.props;

//       return <div>{value}</div>;
//   }
// }
// const mapStateToProps = (state) => {
//     const { counter } = state;
//     return {
//         value:counter.value,
//     };
// };

// export default connect(mapStateToProps) (CounterValue);