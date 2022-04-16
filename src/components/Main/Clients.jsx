import {BsBuilding} from 'react-icons/bs'
import {BiBuildingHouse} from 'react-icons/bi'
import {RiBuilding3Fill} from 'react-icons/ri'
import {RiBuilding4Fill} from 'react-icons/ri'
import {RiBuilding3Line} from 'react-icons/ri'
import {RiBuilding2Line} from 'react-icons/ri'
import {GoPrimitiveDot} from 'react-icons/go'
import './../../css/Main/Clients.css'
const Clients = () => {
  return(
    <section className="clients">
      <div className="client__left">
        <h1 className="clients__title text__md"><GoPrimitiveDot />Our Clients</h1>
        <h1 className="client__header text__lg">We are going to become parterners for the long run</h1>
        <p className="clients__description text__sm">Our client trust us.we work for the long run.making sure the clients satisfaction is up to the mark.</p>
      </div>
      <div className="client__right">
          <div className="clients__grid">
            <div className="grid__item">
              <BsBuilding className="text__lg" />
              <h1>Tech House</h1>
          </div>
            <div className="grid__item">
              <BiBuildingHouse className="text__lg" />
              <h1>Real Estate</h1>
          </div>
            <div className="grid__item">
               <RiBuilding3Line className="text__lg" />
                <h1>Real Estate</h1>
          </div>
            <div className="grid__item">
              <RiBuilding4Fill className="text__lg" />
              <h1>Hex House</h1>
          </div>
            <div className="grid__item">
              <RiBuilding2Line className="text__lg" />
              <h1>Real Estate</h1>
          </div>
            <div className="grid__item">
              <RiBuilding3Fill className="text__lg" />
              <h1>Tree House</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
