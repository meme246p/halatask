import React from 'react';
import { BackgroundImage } from '../types';

const gifs: BackgroundImage[] = [
  // 1. Big Square (2x2) - Top Left - Blue/Cool
  { 
    url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXVxOGlrajIzanN6OXRkaDJlZGEzNmxrbDY1djRkczBkbXM1cWlnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ybxqF6r4w1pjjws/giphy.gif', 
    className: 'col-span-2 row-span-2 object-cover w-full h-full brightness-90' 
  },
  // 2. Small Square (1x1) - Top Right - Sepia
  { 
    url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGNzN3ZoeGJ5ZzN4eXdtMmJydHdnaHkyeTNraHo3azd3dWtuOGkwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/blSTtZehjAZ8I/giphy.gif', 
    className: 'col-span-1 row-span-1 object-cover w-full h-full brightness-110 sepia-50' 
  },
  // 3. Small Square (1x1) - Below Top Right - BW
  { 
    url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExangyOTRmYzdjazJ3MDNwZXV2cDh3N2lnZ3ozZjgzbGYwaDYyb2FmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nDMyoNRkCesJdZAuuL/giphy.gif', 
    className: 'col-span-1 row-span-1 object-cover w-full h-full grayscale contrast-125' 
  },
  
  // 4. Tall Vertical (1x2) - Bottom Left - Red/Pink
  { 
    url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHA3OXMwMzB4ZnZiMHUwMHl2cDA0ZDcxY294OWI2djd5ODR4bWhjaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/waw4nt9LRHdEjWiD8p/giphy.gif', 
    className: 'col-span-1 row-span-2 object-cover w-full h-full saturate-150 hue-rotate-15' 
  },
  // 5. Wide Horizontal (2x1) - Middle - Crowd
  { 
    url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHE5YWpqazNrdXMycjRrOXd1eXJ4NnV1NDZqMmVnazlxbjhwb2U5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m8crpzTJFRDPhqqhXJ/giphy.gif', 
    className: 'col-span-2 row-span-1 object-cover w-full h-full brightness-75 contrast-125' 
  },
  // 6. Small Square (1x1) - Bottom Middle - Party Lights
  { 
    url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGR4cjd3ZjZmOHNub3hpYjUxc3AyYWl5cWQxaHJxMGRscGNoNnFnYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MCdIsgFfYJaKP5mg8U/giphy.gif', 
    className: 'col-span-1 row-span-1 object-cover w-full h-full brightness-110 saturate-125' 
  },
  // 7. Small Square (1x1) - Bottom Right - Selfie
  { 
    url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN25rejdmaXNlbHI5MTNyY2dzanhmd2hmNTFuMWN0bTBzOW5iNW9mMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JwG1ALVCEwWjIiSFyc/giphy.gif', 
    className: 'col-span-1 row-span-1 object-cover w-full h-full saturate-125' 
  },
];

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      {/* 
        Custom 3x4 Grid Layout (12 cells total)
        [ 1 1 2 ]
        [ 1 1 3 ]
        [ 4 5 5 ]
        [ 4 6 7 ]
      */}
      <div className="grid grid-cols-3 grid-rows-4 h-full w-full gap-0 opacity-80">
         {gifs.map((gif, idx) => (
             <img key={idx} src={gif.url} alt="collage part" className={gif.className} />
         ))}
      </div>
      
      {/* Gradients to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
};