import React from 'react';
import Barrels from './Components/barrels.jpg';
import Budweiser from './logos/Budweiser.jpg'
import Busch from './logos/Busch.gif';
import Corona from './logos/Corona.jpg';
import Michelob from './logos/Michelob.jpg';
import Natural from './logos/Natural.jpg';
import ShockTop from './logos/ShockTop.jpg';


function Home() {
  return (
    <div className='text-center'>
      <div>
        <h1 className='pt-3'>Welcome to Cerveza Heaven</h1>
        <h5>The land of all beers</h5>
        <img src={Barrels} style={{width: '500px'}} className='mt-2 mb-2 img-thumbnail' alt='Barrels of Beer'></img>
      </div>
      <div>
        <h2>Our Story</h2>
        <p className='p-5 ml-5 mr-5'>
          Cerveza Heaven was started by a pair of young entrepreneurs that had a love for beer. 
          It did not matter whether the beer came from a local gas station, their uncle's garage brewery,
          or the cooler section of a Walmart. One day, Bill and Ted decided to switch it up from their long time 
          favorite beer, Busch Lite, and try a beer so magnificent that a virus was named after it. That's right,
          Bill and Ted tried the one and only Corona. They soon found out that Mexican beer can be just as good, if
          not better than the classNamey Busch Lite. After having a few sips of Corona, Ted had an epiphany. He told Bill
          that they should open a liquor store and sell only Anheuser-Busch and Corona products. Bill was ecstatic
          about the idea and agreed to join Ted in the business. Bill and Ted needed an investor in their business, and this 
          is where I came into the picture. I decided to help fund Bill and Ted's idea, and we came to an agreement that I would get
          69% of the business. Unfortunately, both of them have left me stranded with the business. You see,
          Bill and Ted went on a haitus, an excellent adventure if you will. I have not heard from them in years, however I bring you 
          <strong> Cerveza Heaven</strong>, the heaven for Corona and Busch fans alike.
        </p>
      </div>
      <div className='container pt-3'>
        <p><strong>Proud Supplier of</strong></p>
        <div className='row pt-3'>
          <a className='col-sm-4' href='/shop/#budweiser' title='Budwesier'>
            <img src={Budweiser}
              className='p-2'
              width='100%' 
              alt='Budweiser Logo'
              ></img>
          </a>
          <a className='col-sm-4' href='/shop/#busch' title='Buschhhhhhh'>
            <img src={Busch}
            className='p-2'
            width='100%' 
            alt='Busch Lite Logo'
            ></img>
          </a>
          <a className='col-sm-4' href='/shop/#corona' title='Corona Extra'>
            <img src={Corona}
            className='p-2'
            width='100%' 
            alt='Corona Logo'
            ></img>
          </a>
        </div>
        <div className='row pt-3 pb-3'>
        <a className='col-sm-4' href='/shop/#michelob' title='Michelob Ultra'>
            <img src={Michelob}
            className='p-2'
            width='100%' 
            alt='Michelob Ultra Logo'
            ></img>
          </a>
          <a className='col-sm-4' href='/shop/#natural' title='Natty Light'>
            <img src={Natural}
            className='p-2'
            width='100%' 
            alt='Natural Light Logo'
            ></img>
          </a>
          <a className='col-sm-4' href='/shop/#shocktop' title='Shock Top'>
            <img src={ShockTop}
            className='p-2'
            width='85%' 
            alt='Shock Top Logo'
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
