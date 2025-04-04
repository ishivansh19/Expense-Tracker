import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, TimeScale);

const HistogramChart = ({ incomes, expenses }) => {
    const incomeData = incomes.map(item => ({ date: new Date(item.date), amount: item.amount }));
    const expenseData = expenses.map(item => ({ date: new Date(item.date), amount: item.amount }));

    incomeData.sort((a, b) => a.date - b.date);
    expenseData.sort((a, b) => a.date - b.date);

    const labels = [...new Set([...incomeData, ...expenseData].map(item => item.date.toISOString().split('T')[0]))];

    const data = {
        labels,
        datasets: [
            {
                label: 'Income',
                data: labels.map(date => {
                    const entry = incomeData.find(item => item.date.toISOString().split('T')[0] === date);
                    return entry ? entry.amount : 0;
                }),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expenses',
                data: labels.map(date => {
                    const entry = expenseData.find(item => item.date.toISOString().split('T')[0] === date);
                    return entry ? entry.amount : 0;
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    tooltipFormat: 'yyyy-MM-dd',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default HistogramChart;
