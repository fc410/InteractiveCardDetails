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
            {
                cardNum === '' ? 
                <div className='number'>
                    0000 0000 0000 0000
                </div>:

                <div className='number'>
                {cardNum}
                </div>
            }

            {
                fullName === '' ?  
                <div className='name'>
                    Fernando Crespo
                </div>:
                <div className='name'>
                    {fullName}
                </div>
            }

            {
                date === '/' ?
                <div className='exp-date'>
                    00/00
                </div>:
                <div className='exp-date'>
                    {date}
                </div>
            }
        </div>
    )
}

export default FrontCard;