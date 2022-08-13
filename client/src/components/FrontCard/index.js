import './index.css';
import FCard from '../../images/bg-card-front.png';
import CardLogo from '../../images/card-logo.svg'

const FrontCard = ({cardNum, MM, YY, fullName}) => {
    let date = MM + '/' + YY;
    return(
        <div className="main-card">
            <img 
                src={FCard} 
                alt='front-card'
                className='front-card-img'
            />

            <img 
                src={CardLogo} 
                alt='card-logo' 
                className='logo'
            />

            <div className='number'>
                {cardNum}
            </div>

            <div className='name'>
                {fullName}
            </div>

            <div className='exp-date'>
                {date}
            </div>
        </div>
    )
}

export default FrontCard;