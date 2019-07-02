import React from 'react';

import GarageSlider from '../../components/GarageSlider/GarageSlider';
import Header from '../../components/Header/Header';
import GarageLogic from './GarageLogic'

// export default class Garage extends Component {
//   constructor() {
//     super();

//     this.state = {
//       user: {
//         username: '',
//         cars: [],
//         email: null,
//         games: []
//       }
//     };
//   }

//   async componentDidMount() {
//     const user = await tokenValidationHelper();

//     await instance.get('/cars/user').then(response => {
//       const { cars } = response.data;

//       user.cars = cars;
//       this.setState({ user });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Header user={this.state.user} />
//         <div>
//           <GarageSlider user={this.state.user} />
//         </div>
//       </div>
//     );
//   }
// }

export default () => (
  <GarageLogic>
    {props => (
      <div>
        <Header user={props.user} />
        <div>
          <GarageSlider user={props.user} />
        </div>
      </div>
    )}
  </GarageLogic>
)