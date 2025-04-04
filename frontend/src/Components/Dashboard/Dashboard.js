import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import {inr} from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {inr} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {inr} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {inr} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                        <div className="salary-item">
                            <p>{inr}{Math.max(0, Math.min(...incomes.map(item => item.amount)))}</p>
                            <p>{inr}{Math.max(...incomes.map(item => item.amount))}</p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span> Max</h2>
                        <div className="salary-item">
                            <p>{inr}{Math.max(0, Math.min(...expenses.map(item => item.amount)))}</p>
                            <p>{inr}{Math.max(...expenses.map(item => item.amount))}</p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;

                .income, .expense{
                    grid-column: span 2;
                }

                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;

                    p{
                        font-size: 2rem; /* Reduced font size for balance */
                        font-weight: 700;
                        word-wrap: break-word;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                    .income:hover, .expense:hover, .balance:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 2.5rem; /* Adjusted font size for balance */
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }

            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .stats-con{
            grid-template-columns: 1fr;
            gap: 1.5rem;

            .chart-con{
                grid-column: 1;
                height: 300px;
            }

            .amount-con{
                grid-template-columns: 1fr 1fr;
                margin-top: 1rem;
                gap: 1rem;
                
                .income, .expense, .balance{
                    grid-column: span 1;
                }
            }

            .history-con{
                grid-column: 1;
            }
        }
    }

    @media (max-width: 480px) {
        .stats-con{
            gap: 1rem;
        }

        .amount-con{
            margin-top: 1rem;

            .income, .expense{
                p{
                    font-size: 1.8rem;
                }
            }

            .balance p{
                font-size: 2rem; /* Adjusted font size for balance */
            }
        }

        .history-con h2{
            font-size: 1rem;
        }

        .salary-item p{
            font-size: 1.4rem;
        }
    }

    @media (min-width: 1024px) {
        .stats-con{
            grid-template-columns: repeat(5, 1fr);
        }

        .chart-con{
            height: 400px;
        }

        .amount-con{
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }

        .income, .expense, .balance{
            p{
                font-size: 2rem; /* Reduced font size for balance */
            }
        }
    }
`;



export default Dashboard