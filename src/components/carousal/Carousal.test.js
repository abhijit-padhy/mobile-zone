import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousal from './Carousal';

const images= ["/assets/products/img1.png", "/assets/products/img2.png", "/assets/products/img3.png", "/assets/products/img4.png", "/assets/products/img5.png"]

test('image should be rendered', async () => {
  render(<Carousal images={images} />); 
  const greetingNode = await screen.findByTestId('carousalImg');
  expect(greetingNode).toBeInTheDocument();
});

// test('on hover image zoom out', async () => {
//   render(<Carousal images={images} />); 
//   const greetingNode = await screen.findByTestId('carousalImg');
//   // greetingNode.hover();
//   fireEvent.mouseOver(greetingNode)
//   console.log("greeting node: ", greetingNode);
//   const style = window.getComputedStyle(greetingNode);

//   var el = document.querySelectorAll("img")[0];
//   expect(style.transform).toBe("scale(1.5,1.5)");
// });

