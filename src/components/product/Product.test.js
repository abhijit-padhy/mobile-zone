import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

const list = [
  {
    "name": "iphone",
    "price": 1234,
    "images": ["/assets/products/img1.png", "/assets/products/img2.png", "/assets/products/img3.png", "/assets/products/img4.png", "/assets/products/img5.png"]
  },
  {
    "name": "mi",
    "price": 13245,
    "images": ["/assets/products/img1.png", "/assets/products/img2.png", "/assets/products/img3.png", "/assets/products/img4.png", "/assets/products/img5.png"]
  }
]

test('product name appears', () => {
  const { getByText } = render(<Product product={list[0]} />);
  // console.log("getByText: ", getByText);
  
  const linkElement = getByText(/iphone/i);
  // console.log("linkEl: ", linkElement);
  expect(linkElement).toBeInTheDocument();
});

test('product price appears', () => {
  const { getByText } = render(<Product product={list[0]} />);
  const linkElement = getByText(/1234/i);
  expect(linkElement).toBeInTheDocument();
});