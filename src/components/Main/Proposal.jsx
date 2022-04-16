import {GoPrimitiveDot} from 'react-icons/go'
import {MdDoneAll} from 'react-icons/md'
import './../../css/Main/Proposal.css'
import img from './../../Images/walpaper.jpg'
function Proposal(){
  return(
    <section className="proposal">
      <div className="proposal__img">
        <img src={img} alt="proposal" />
      </div>
      <div className="proposal__text">
        <h1 className="proposal__heading text__md"><GoPrimitiveDot /> Why choose our properties</h1>
        <h1 className="title text__lg">The Experts in local and international property</h1>
        <p className="description text__sm">real estate. This has its own risks for investors, which I will discuss below.
          That said,way to value the business because it consists of the observable
        </p>
        <ul className="text__sm">
          <li><span><MdDoneAll /></span> Safe Payments</li>
          <li><span><MdDoneAll /></span> Secuirity</li>
          <li><span><MdDoneAll /></span> Social services</li>
          <li><span><MdDoneAll /></span> Easy Booking</li>
        </ul>
      </div>
    </section>
  )
}

export default Proposal
