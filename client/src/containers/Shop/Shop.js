import React from 'react';

import ShopLogic from './ShopLogic';

import ShopUserInfo from './../../components/Shop/ShopUserInfo';
import CarList from './../../components/Shop/CarList';
import Header from './../../components/Header/Header';

import './../../components/Shop/Shop.scss';

// class MainPage extends Component {
//   constructor() {
//     super();

//     this.state = {
//       user: {
//         username: '',
//         cars: [],
//         games: []
//       },
//       cars: []
//     };
//   }

//   async componentDidMount() {
//     try {
//       const user = await tokenValidationHelper();

//       this.setState({ user });

//       await axios.get('http://127.0.0.1:8081/api/cars').then(data => {
//         const { cars } = data.data;

//         this.setState({ cars });
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   buyCarFunction = _id => e => {
//     e.preventDefault();

//     axios
//       .post('http://127.0.0.1:8081/api/cars/add', {
//         _id: this.state.user._id,
//         car: _id
//       })
//       .then(response => {
//         alert('Car successfully bought!');
//       })
//       .catch(e => console.log(e.message));

//     instance
//       .post('/cars/add', {
//         car: _id
//       })
//       .then(response => {
//         alert('Successfully purchased!');
//       })
//       .catch(e => console.log(e));
//   };

//   render() {
//     return (
//       <div>
//         <Header user={this.state.user} />
//         <div className="Shop-container">
//           <ShopUserInfo />
//           <CarList
//             buyCarFunction={this.buyCarFunction}
//             cars={this.state.cars}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default () => (
  <ShopLogic>
    {props => (
      <div>
        <Header user={props.user} />
        <div className="Shop-container">
          <ShopUserInfo />
          <CarList buyCarFunction={props.buyCarFunction} cars={props.cars} />
        </div>
      </div>
    )}
  </ShopLogic>
);

// export default MainPage;
