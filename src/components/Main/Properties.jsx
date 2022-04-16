import {GoPrimitiveDot} from 'react-icons/go'
import './../../css/Main/Properties.css'

import img from './../../Images/walpaper.jpg'
import Property from './Property'
function Properties(){
  return(
    <section className="properties">
      <div className="properties__header">
        <div className="titles">
        <h1 className="properties__title text__md"><GoPrimitiveDot /> Properties</h1>
        <h1 className="properties__status text__lg">Latest Properties</h1>
        </div>
        <div className="properties__filter">
          <button>Sell</button>
          <button>Buy</button>
          <button>Rent</button>
        </div>
      </div>
      <div className="properties__grid">
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </div>
    </section>
  )
}

export default Properties
