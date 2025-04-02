import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {addExpense,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="expenses">
                        {expenses.map((expense) => {
                            const {_id, title, amount, date, category, description, type} = expense;
                            console.log(expense)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={'expense'}
                                category={category} 
                                indicatorColor="red"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column; /* Stack elements vertically by default */
    
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: clamp(1.5rem, 2vw, 2rem);
        gap: 0.5rem;
        
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .expense-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

    /* Mobile and Tablet adjustments */
    @media (max-width: 768px) {
        .total-expense{
            flex-direction: column;
            text-align: center; /* Center text for smaller screens */
            padding: 1.5rem; /* Add more padding for better readability */
        }

        .expense-content{
            flex-direction: column; /* Stack content vertically on smaller screens */
            gap: 1.5rem;
        }

        .expenses{
            width: 100%; /* Allow income section to take full width on small screens */
        }
    }

    /* Smaller screens (mobile) */
    @media (max-width: 480px) {
        .total-expense{
            font-size: 1.8rem; /* Reduce font size */
            span{
                font-size: 2rem; /* Make the span text smaller for mobile */
            }
        }

        .expense-content{
            gap: 1rem; /* Decrease gap between sections */
        }
    }

    /* Larger screens (desktop) */
    @media (min-width: 1024px) {
        .total-expense{
            font-size: 2.2rem; /* Slightly larger font size on larger screens */
        }
    }
`;


export default Expenses