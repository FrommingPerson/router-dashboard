import { Component } from '@angular/core';
import { Route } from '../models/Route';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  protected routes: Route[] = [
    {
      uuid: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      address: '192.168.1.42',
      mask: '24',
      gateway: '192.168.1.1',
      interface: 'eth0',
    },
    {
      uuid: '9c858901-8a57-4791-81fe-4c455b099bc9',
      address: '10.0.0.17',
      mask: '8',
      gateway: '10.0.0.1',
      interface: 'eth1',
    },
    {
      uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      address: '172.16.5.128',
      mask: '16',
      gateway: '172.16.5.1',
      interface: 'wlan0',
    },
    {
      uuid: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
      address: '192.0.2.77',
      mask: '30',
      gateway: '192.0.2.1',
      interface: 'eth2',
    },
    {
      uuid: 'e02fa0e4-01ad-090a-c130-0d05e0008ba0',
      address: '203.0.113.5',
      mask: '24',
      gateway: '203.0.113.1',
      interface: 'wlan1',
    },
    {
      uuid: '6fa459ea-ee8a-3ca4-894e-db77e160355e',
      address: '10.10.10.200',
      mask: '8',
      gateway: '10.10.10.1',
      interface: 'eth0',
    },
    {
      uuid: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      address: '172.31.255.254',
      mask: '16',
      gateway: '172.31.0.1',
      interface: 'eth1',
    },
    {
      uuid: '123e4567-e89b-12d3-a456-426614174000',
      address: '198.51.100.23',
      mask: '24',
      gateway: '198.51.100.1',
      interface: 'wlan0',
    },
    {
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      address: '192.168.100.99',
      mask: '30',
      gateway: '192.168.100.1',
      interface: 'lo',
    },
    {
      uuid: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
      address: '10.20.30.40',
      mask: '8',
      gateway: '10.20.30.1',
      interface: 'eth0',
    },
  ];
}
