import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import { inr } from '../../utils/Icons';
import HistogramChart from './HistogramChart';  
import AllHistory from './AllHistory';

function Transactions() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    const getMinValue = (arr) => (arr.length ? Math.min(...arr.map(item => item.amount)) : 0);
    const getMaxValue = (arr) => (arr.length ? Math.max(...arr.map(item => item.amount)) : 0);

    return (
        <TransactionsStyled>
            <InnerLayout>
                <h1>Transactions Overview</h1>
                <div className="chart-container">
                    <HistogramChart incomes={incomes} expenses={expenses} />
                </div>

                {/* Financial Overview */}
                <div className="stats">
                    <div className="stat-card income">
                        <h2>Total Income</h2>
                        <p>{inr} {totalIncome()}</p>
                    </div>
                    <div className="stat-card expense">
                        <h2>Total Expense</h2>
                        <p>{inr} {totalExpenses()}</p>
                    </div>
                    <div className="stat-card balance">
                        <h2>Total Balance</h2>
                        <p>{inr} {totalBalance()}</p>
                    </div>
                </div>

                <div className="history-wrapper">
                    <AllHistory />
                </div>

                <div className="salary-stats">
                    <h2>Salary Insights</h2>
                    <div className="salary-item">
                        <span>Min Salary: {inr}{getMinValue(incomes)}</span>
                        <span>Max Salary: {inr}{getMaxValue(incomes)}</span>
                    </div>

                    <h2>Expense Insights</h2>
                    <div className="salary-item">
                        <span>Min Expense: {inr}{getMinValue(expenses)}</span>
                        <span>Max Expense: {inr}{getMaxValue(expenses)}</span>
                    </div>
                </div>
            </InnerLayout>
        </TransactionsStyled>
    );
}

const TransactionsStyled = styled.div`
    h1 {
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .chart-container {
        width: 100%;
        height: 450px;
        margin-bottom: 2rem;
    }

    .stats {
        display: flex;
        justify-content: space-around;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .stat-card {
        flex: 1;
        background: linear-gradient(135deg, #ece9e6, #ffffff);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }

    .income { background: linear-gradient(135deg, #a8ff78, #78ffd6); }
    .expense { background: linear-gradient(135deg, #ff9a9e, #fad0c4); }
    .balance { background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; }

    /* Longer Recent Transactions Section */
    .history-wrapper {
        max-height: 400px; 
        overflow-y: auto;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 12px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }

    .salary-stats h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .salary-item {
        display: flex;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.05);
        padding: 1rem;
        border-radius: 8px;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        .stats {
            flex-direction: column;
            gap: 1rem;
        }

        .stat-card {
            margin-bottom: 1rem;
        }
    }
`;

export default Transactions;
