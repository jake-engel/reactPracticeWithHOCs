import React, { Component } from 'react';

export default () => {
  return (
    <div>
      Super Special Recipe
      <ul>
        <li>Hoo Hoo</li>
        <li>Woo Woo</li>
        <li>Boo Boo</li>
        <li>Bam Bam</li>
      </ul>
    </div>
  );
};

/* The following code would also be possible below instead of
   component={ requireAuth(Resources) } in index.js file.
   Use this approach if you want every instance of Resources to require authentication.
   (This is true in our application however we chose not to use this approach....)


const Resources = () => {
  return ( ... ); // html code in here
}

export default requireAuth(Resources);

*/
