import './index.css';
import IconComplete from '../../images/icon-complete.svg';

const SuccessFormat = () => {
    return(
        <div>
            <img
                src={IconComplete}
                alt='complete-icon'
                className='img-complete'
            />
            
            <div className='text-caps'>
                THANK YOU!
            </div>

            <div className='text'>
                We've added you details
            </div>
        </div>
    )
}

export default SuccessFormat;