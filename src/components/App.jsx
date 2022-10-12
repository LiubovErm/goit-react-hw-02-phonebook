import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Box } from './Box/Box';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  render() {
    
    return (
      <Box>
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <List/>
      </Box>
    );
  }
}











// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
