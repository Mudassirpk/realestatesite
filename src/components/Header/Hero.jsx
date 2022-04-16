import {BiBuildingHouse} from 'react-icons/bi'
import {BiBuilding} from 'react-icons/bi'
import {BsBuilding} from 'react-icons/bs'
import {RiBuilding3Fill} from 'react-icons/ri'
import {CgCalendarDates} from 'react-icons/cg'
import {GrFormSearch} from 'react-icons/gr'

const Hero = () => {
  return(
    <div className="hero">
      <h1 className="hero__header">Find the perfect place to live with your family</h1> 
      <div className="hero__options">
        <div className="hero__option">
          <div className="hero__option__iconwrapper">
            <BiBuildingHouse />
          </div>
          <p className="hero__option__title">Appartments</p>
        </div>
        <div className="hero__option">
          <div className="hero__option__iconwrapper">
            <BsBuilding />
          </div>
          <p className="hero__option__title">Commercial Property</p>
        </div>
        <div className="hero__option">
          <div className="hero__option__iconwrapper">
            <BiBuilding />
          </div>
          <p className="hero__option__title">Office</p>
        </div>
        <div className="hero__option">
          <div className="hero__option__iconwrapper">
            <RiBuilding3Fill />
          </div>
          <p className="hero__option__title">Ville</p>
        </div>
      </div>

      <form>
        <input type="text" placeholder="Contary"/>
        <input type="text" placeholder="State"/>
        <input type="text" placeholder="State"/>
        <label htmlFor="date">
          <CgCalendarDates className="date__icon" />
        </label>
        <input type="date" id="date" />
        <button className="form__action">SEARCH <GrFormSearch className="form__search" /></button>
      </form>

      <h1 className="text__md information__fact">We have over 54,000 appartments,place and plots.</h1>
    </div>
  )
}

export default Hero;
