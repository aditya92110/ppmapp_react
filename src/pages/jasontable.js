import React from 'react'
import JsonData from './data.json'
function JsonDataDisplay(){
	//<Item className='tablediv'>
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.Number}</td>
					<td>{info.ChemicalName}</td>
					<td>{info.ChemicalFormula}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table className='jsontable'>
				<thead>
					<tr>
					<th> <h2>Sr.NO</h2></th>
					<th><h2>Chemical Name</h2></th>
					<th><h2>Chemical formula</h2></th>
					</tr>
				</thead>
				<tbody className='dislaylaykdkd'>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)

	//</Item>
}

export default JsonDataDisplay;
