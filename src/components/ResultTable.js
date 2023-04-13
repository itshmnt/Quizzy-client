import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earned Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Hemant</td>
                    <td>03</td>
                    <td>50</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
