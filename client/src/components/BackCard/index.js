import './index.css';
import BCard from '../../images/bg-card-back.png'

const BackCard = ({cvc}) => {
    return(
        <div className="main-back-card">
            <img 
                src={BCard} 
                alt='back-card'
                className='back-card-img'
            />
            {
                cvc === '' ?
                <div className='cvc-num'>
                    123
                </div>:
                <div className='cvc-num'>
                    {cvc}
                </div>
            }
        </div>
    )
}

export default BackCard;