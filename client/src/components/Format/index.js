import './index.css';
import MainImg from '../../images/bg-main-desktop.png';
import {useState, useEffect} from 'react';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';
import SuccessFormat from '../SuccessFormat'

const Format = () => {
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')
    const [complete, setComplete] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [cardNumberError, setCardNumberError] = useState(false)
    const [expirationDateError, setExpirationDateError] = useState(false)
    const [cvcError, setCvcError] = useState(false)
    const [cardNumError, setCardNumError] = useState(false)
    const [expirationDateNumberError, setExpirationDateNumberError] = useState(false)
    const [cvcNumberError, setCvcNumberError] = useState(false)
    const [cardNum, setCardNum] = useState([]);

    useEffect(() => {
        setCardNum(cardNumber.split(' '))
    }, [cardNumber])

    const updateName = (event) =>{
        setName(event.target.value);
    }

    const updateCardNumber = (event) =>{
        let val = event.target.value;
        if(val.length <= 19){
            val = val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
        }
        setCardNumber(val);
    }

    const updateMonth = (event) =>{
        setMonth(event.target.value);
    }

    const updateYear = (event) =>{
        setYear(event.target.value);
    }

    const updateCvc = (event) =>{
        setCvc(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        setNameError(false);
        setCardNumberError(false);
        setCardNumError(false);
        setExpirationDateError(false);
        setExpirationDateNumberError(false);
        setCvcNumberError(false);
        setCvcError(false);

        if(name.length <= 1){
            setNameError(true);
        }
        if(cardNumber.length <= 18){
            setCardNumberError(true);
        }
        if(/^[0-9]+$/.test(cardNum.join('')) === false){
            setCardNumError(true);
        }
        if(month.length <= 1 || year.length <= 1){
            setExpirationDateError(true);
        }
        if(/^[0-9]+$/.test(month) === false || /^[0-9]+$/.test(year) === false){
            setExpirationDateNumberError(true);
        }
        if(/^[0-9]+$/.test(cvc) === false){
            setCvcNumberError(true);
        }
        if(cvc.length <= 1){
            setCvcError(true);
        }
        if(name.length >= 1 && 
            cardNumber.length >=1 &&
            /^[0-9]+$/.test(cardNum.join('')) === true && 
            month.length >= 1 && 
            year.length >= 1 && 
            (/^[0-9]+$/.test(month) === true || /^[0-9]+$/.test(year) === true) && 
            cvc.length >= 1){
                setNameError(false);
                setCardNumberError(false);
                setCardNumError(false);
                setExpirationDateError(false);
                setExpirationDateNumberError(false);
                setCvcNumberError(false);
                setCvcError(false);
                setComplete(true);
        }
    }

    const fieldRequired = 'Can\'t be blank';
    const numberError = 'Wrong Format, numbers only'
    console.log(cardNum)

    return(
        <div className="main-content">
            <img src={MainImg} alt='front card' className='main-img'/>
            
            <div className='back-card-alignment'>
                <BackCard cvc={cvc}/>
            </div>

            <div className='front-card-alignment'>
                <FrontCard 
                    cardNum={cardNumber}
                    MM={month}
                    YY={year}
                    fullName={name}
                />
            </div>

            <form className='form-data'>
                { !complete ? 
                    <div className='main-data'>
                        <div className='text-label'>
                            <lable className='holder-label'>
                                CARD HOLDER'S NAME
                            </lable>

                            <input 
                                type='text' 
                                className='card-holder-name'
                                value={name}
                                onChange={updateName}
                                placeholder='e.g. Fernando Crespo'
                                required
                            />

                            <div className='error'>
                                {!nameError ? null : fieldRequired}
                            </div>
                        </div>

                        <div className='text-label'>
                            <lable className='card-label'>
                                CARD NUMBER
                            </lable>

                            <input 
                                type='text' 
                                name='card-number' 
                                className='card-number'
                                value={cardNumber}                                
                                maxLength='19'
                                onChange={updateCardNumber}
                                placeholder='e.g. 1234 5678 9123 0000'
                                required
                            />

                            <div className='error'>
                                {!cardNumberError ? null : fieldRequired}
                            </div>

                            <div className='error'>
                                {!cardNumError ? null : numberError}
                            </div>
                        </div>

                        <div className='date-cvc'>
                            <div className='col'>
                                <lable>EXP. DATE (MM/YY)</lable>
                                <div className='date-inputs'>
                                    <input 
                                        type='text' 
                                        name='month' 
                                        maxLength="2" 
                                        className='month-input'
                                        onChange={updateMonth}
                                        placeholder='MM'
                                        required
                                    />

                                    <input 
                                        type='text' 
                                        name='year' 
                                        maxLength="2" 
                                        className='year-input'
                                        onChange={updateYear}
                                        placeholder='YY'
                                        required
                                    />

                                    <div className='error'>
                                        {!expirationDateError ? null : fieldRequired}
                                    </div>

                                    <div className='error'>
                                        {!expirationDateNumberError ? null : numberError}
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <label className='cvc-label'>CVC</label>

                                <input 
                                type='text' 
                                name='cvc' 
                                maxLength="3" 
                                className='cvc-input'
                                onChange={updateCvc}
                                placeholder='e.g. 123'
                                required
                                />

                                <div style={{marginLeft: '35px'}}>
                                    <div className='error'>
                                        {!cvcError ? null : fieldRequired}
                                    </div>

                                    <div className='error'>
                                        {!cvcNumberError ? null : numberError}
                                    </div>
                                </div>
                            </div>

                        </div>

                        </div> : 
                <div className='success'>
                    <SuccessFormat />
                </div>
                }
                <button 
                    className='button'
                    onClick={handleClick}
                >
                    Confirm
                </button>     
            </form>
        </div>
    )
}

export default Format;