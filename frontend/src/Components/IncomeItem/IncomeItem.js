import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    // console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    color: #222260;

    .icon {
        width: clamp(50px, 8vw, 80px);
        height: clamp(50px, 8vw, 80px);
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        
        i {
            font-size: clamp(1.8rem, 3vw, 2.6rem);
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        h5 {
            font-size: clamp(1rem, 1.5vw, 1.3rem);
            padding-left: 2rem;
            position: relative;
            
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: ${(props) => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            flex-wrap: nowrap;
            width: 100%;
            
            .text {
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .delete-btn {
                flex-shrink: 0;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-color);
                border-radius: 50%;
                cursor: pointer;
                
                &:hover {
                    background: var(--color-delete);
                }
            }
        }
    }

    @media (max-width: 1200px) {
        max-width: 450px;
    }

    @media (max-width: 1024px) {
        max-width: 400px;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        
        .inner-content {
            width: 100%;
            flex-direction: column;
        }

        .text {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;

        .inner-content {
            width: 100%;
            flex-direction: column;
        }

        .text {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 1rem;
        
        .icon {
            width: 60px;
            height: 60px;
        }

        .content {
            h5 {
                font-size: 1rem;
            }

            .inner-content {
                .text {
                    font-size: 0.9rem;
                }
            }
        }
    }
`;





export default IncomeItem