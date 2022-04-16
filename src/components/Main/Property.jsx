import img from './../../Images/walpaper.jpg'

import {MdLocationOn} from 'react-icons/md'
import {FaBed} from 'react-icons/fa'
import {MdFamilyRestroom} from 'react-icons/md'
function Property(){
  return(
    <section className="property">
      <div className="card__img">
        <img src={img} alt="property" />
        <p className="price text__md text__bold">225$</p>
      </div>
      <div className="card__body">
        <h1 className="property__title text__sm">Grand Lux</h1>
        <p className="location"><MdLocationOn /> Fransisco , Town Hall</p>
        <div className="features text__sm text__semibold">
          <div className="feature">
            <FaBed /> : 3
          </div>
          <div className="feature">
            <MdFamilyRestroom /> : 3
          </div>
          <div className="feature">
            <FaBed /> : 3
          </div>
        </div>
      </div>
    </section>
  )
}

export default Property
