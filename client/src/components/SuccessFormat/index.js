import './index.css';
import IconComplete from '../../images/icon-complete.svg';

const SuccessFormat = () => {
    return(
        <div>
            <div className='img-complete'>
                <img
                    src={IconComplete}
                    alt='complete-icon'
                    style={{width: '50px'}}
                />
            </div>
            
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