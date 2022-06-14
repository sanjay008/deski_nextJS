import * as ReactDOM from "react-dom/client";
import Main from '../components/main'
import Script from "next/script"

export default function Users({}) {
	
	return (
		<>
		<div>
			<h1>Users</h1>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile</th>
					</tr>	
				</thead>
				<tbody>
				
					<tr>
						<td>1</td>
						<td>users</td>
						<td>users@gmail.com</td>
						<td>123456</td>
					</tr>
					<tr>
						<td>2</td>
						<td>john</td>
						<td>users@gmail.com</td>
						<td>123456</td>
					</tr>
					<tr>
						<td>3</td>
						<td>doe</td>
						<td>users@gmail.com</td>
						<td>123456</td>
					</tr>
				</tbody>
			</table>
		</div>
		</>
	)
}

Users.getLayout = function getLayout(page) {
  return (
    <Main>
      {page}
    </Main>
  )
}
