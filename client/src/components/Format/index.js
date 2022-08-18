import './index.css';
import MainImg from '../../images/bg-main-desktop.png';
import {useState, useEffect} from 'react';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';
import SuccessFormat from '../SuccessFormat'

const Format = () => {
    const [data, setData] = useState(
        {
            name: '',
            cardNumber: '',
            month: '',
            year: '',
            cvc: '',
        }
    )
    const [complete, setComplete] = useState(false)
    const [cardNum, setCardNum] = useState([]);
    const [errors, setErrors] = useState({
        nameError: false,
        cardNumberError: false,
        expirationDateError: false,
        cvcError: false,
        cardNumError: false,
        expirationDateNumberError: false,
        cvcNumberError: false,
    })


    useEffect(() => {
        setCardNum(data.cardNumber.split(' '))
    }, [data.cardNumber])

    const updateName = (event) => {
        setData(prev => ({...prev, name: event.target.value}));
    }

    const updateCardNumber = (event) => {
        let val = event.target.value;
        if(val.length <= 19){
            val = val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
        }
        setData(prev => ({...prev, cardNumber: val}));
    }

    const updateMonth = (event) => {
        setData(prev => ({...prev, month: event.target.value}));
    }

    const updateYear = (event) => {
        setData(prev => ({...prev, year: event.target.value}));
    }

    const updateCvc = (event) => {
        setData(prev => ({...prev, cvc: event.target.value}));
    }

    const handleClick = (event) => {
        event.preventDefault();
        setErrors(prev =>({...prev,
            nameError: false,
            cardNumberError: false,
            expirationDateError: false,
            cvcError: false,
            cardNumError: false,
            expirationDateNumberError: false,
            cvcNumberError: false,
        }))

        if(data.name.length <= 1){
            setErrors(prev => ({...prev, nameError: true}));
        }
        if(data.cardNumber.length <= 18){
            setErrors(prev => ({...prev, cardNumberError: true}));
        }
        if(/^[0-9]+$/.test(cardNum.join('')) === false){
            setErrors(prev => ({...prev, cardNumError: true}));
        }
        if(data.month.length <= 1 || data.year.length <= 1){
            setErrors(prev => ({...prev, expirationDateError: true}));
        }
        if(/^[0-9]+$/.test(data.month) === false || /^[0-9]+$/.test(data.year) === false){
            setErrors(prev => ({...prev, expirationDateNumberError: true}));
        }
        if(/^[0-9]+$/.test(data.cvc) === false){
            setErrors(prev => ({...prev, cvcNumberError: true}));
        }
        if(data.cvc.length <= 1){
            setErrors(prev => ({...prev, cvcError: true}));
        }
        if(data.name.length >= 1 && 
            data.cardNumber.length >=1 &&
            /^[0-9]+$/.test(cardNum.join('')) === true && 
            data.month.length >= 1 && 
            data.year.length >= 1 && 
            (/^[0-9]+$/.test(data.month) === true || /^[0-9]+$/.test(data.year) === true) && 
            data.cvc.length >= 1){
                setErrors(prev => ({...prev, 
                    nameError: false,
                    cardNumberError: false,
                    expirationDateError: false,
                    cvcError: false,
                    cardNumError: false,
                    expirationDateNumberError: false,
                    cvcNumberError: false,
                }));
                setComplete(true)
        }
    }

    const fieldRequired = 'Can\'t be blank';
    const numberError = 'Wrong Format, numbers only'

    return(
        <div className='main-content'>
            <img src={MainImg} alt='main' className='main-img'/>

            <div className='back-card-alignment'>
                <BackCard cvc={data.cvc}/>
            </div>

            <div className='front-card-alignment'>
                <FrontCard 
                    cardNum={data.cardNumber}
                    MM={data.month}
                    YY={data.year}
                    fullName={data.name}
                />
            </div>
            
            {!complete ?
                <div className='content'>
                    <label className='holder-name'>CARDHOLDER'S NAME</label>
                    <input 
                        type='text' 
                        className='card-hold-name'
                        value={data.name}
                        onChange={updateName}
                        placeholder='e.g. Fernando Crespo'
                    />

                    <div className='error'>
                        {!errors.nameError ? null : fieldRequired}
                    </div>

                    <label className='card-number'>CARD NUMBER</label>
                    <input 
                        type='text' 
                        className='card-number-text'
                        value={data.cardNumber}                                
                        maxLength='19'
                        onChange={updateCardNumber}
                        placeholder='e.g. 1234 5678 9123 0000'
                    />
                        <div className='error'>
                            {!errors.cardNumberError ? null : fieldRequired}
                        </div>

                        <div className='error'>
                            {!errors.cardNumError ? null : numberError}
                        </div>

                    <div className='date-cvc'>
                        <div className='col'>
                            <label>EXP. DATE (MM/YY)</label>
                            
                            <div>
                                <input 
                                    type='text' 
                                    className='month'
                                    name='month'
                                    maxLength="2"
                                    value={data.month} 
                                    onChange={updateMonth}
                                    placeholder='MM'
                                />

                                <input 
                                    type='text' 
                                    className='year'
                                    name='month'
                                    maxLength="2"
                                    value={data.year} 
                                    onChange={updateYear}
                                    placeholder='YY'
                                />

                                <div className='error'>
                                    {!errors.expirationDateError ? null : fieldRequired}
                                </div>

                                <div className='error'>
                                    {!errors.expirationDateNumberError ? null : numberError}
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
                                value={data.cvc}
                                onChange={updateCvc}
                                placeholder='e.g. 123'
                            />
                            <div className='error'>
                                {!errors.cvcError ? null : fieldRequired}
                            </div>

                            <div className='error'>
                                {!errors.cvcNumberError ? null : numberError}
                            </div>
                        </div>
                    </div>

                    <button 
                        className='button'
                        onClick={handleClick}
                    >
                        Confirm
                    </button> 
            </div>: 
                
                <div className='success'>
                    <SuccessFormat />
                </div>
            }

        </div>
    )
}

export default Format;