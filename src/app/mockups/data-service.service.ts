import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      users: [
        {
          id: 1,
          username: 'admin',
          password: '123456789',
          email: 'admin@gmail.com',
          roles: [1], // Administrator
          fullname: 'Jhon D',
          firstname: 'Jhon',
          lastname: 'Doe',
          occupation: 'CEO',
          companyName: 'Politecnico Grancolombiano',
          phone: '456669067890',
          language: 'es',
          credentials: {
            authToken: 'auth-token-8f3ae836da744329a6f93bf20594b5cc',
            refreshToken: 'auth-token-f8c137a2c98743f48b643e71161d90aa',
          },
        },
        {
          id: 2,
          username: 'user',
          password: '123456789',
          email: 'user@gmail.com',
          roles: [2], // Manager
          fullname: 'Jane D',
          firstname: 'Jane',
          lastname: 'Doe',
          occupation: 'Deputy Head of Keenthemes in New York office',
          companyName: 'Politecnico Grancolombiano',
          phone: '456669067891',
          language: 'es',
          credentials: {
            authToken: 'auth-token-6829bba69dd3421d8762-991e9e806dbf',
            refreshToken: 'auth-token-f8e4c61a318e4d618b6c199ef96b9e55',
          },
        },
        {
          id: 3,
          username: 'guest',
          password: '123456789',
          email: 'guest@gmail.com',
          roles: [3], // Guest
          fullname: 'Manu G',
          firstname: 'Manu',
          lastname: 'Gil',
          occupation: 'CTO',
          companyName: 'Politecnico Grancolombiano',
          phone: '456669067892',
          language: 'es',
          credentials: {
            authToken: 'auth-token-d2dff7b82f784de584b60964abbe45b9',
            refreshToken: 'auth-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
          },
        },
      ],
      products: [
        {
          id: 1,
          drink: 'Ceveza',
          price: '$5.500',
        },
        {
          id: 2,
          drink: 'Vino',
          price: '$14.500',
        },
        {
          id: 3,
          drink: 'Tequila',
          price: '$16.500',
        },
        {
          id: 4,
          drink: 'Whiskey',
          price: '$17.500',
        },
        {
          id: 5,
          drink: 'Ron',
          price: '$15.500',
        },
        {
          id: 6,
          drink: 'Vodka',
          price: '$13.500',
        },
      ],
    };
  }
}
