import './index.css';
import BCard from '../../images/bg-card-back.png'

const BackCard = ({cvc}) => {
    return(
        <div className="main-back-card">
            <img 
                src={BCard} 
                alt='back-card'
                style={{width: '100%'}}
            />
            <div className='cvc-num'>
                {cvc}
            </div>
        </div>
    )
}

export default BackCard;