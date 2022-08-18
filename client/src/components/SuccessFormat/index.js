import './index.css';
import IconComplete from '../../images/icon-complete.svg';

const SuccessFormat = () => {
    return(
        <div>
            <div className='img-complete'>
                <img
                    src={IconComplete}
                    alt='complete-icon'
                    style={{width: '75px'}}
                />
            </div>
            
            <div className='text-caps'>
                THANK YOU!
            </div>

            <div className='text'>
                We've added you details
            </div>

            <button className='button'>
                Confirm
            </button>
        </div>
    )
}

export default SuccessFormat;