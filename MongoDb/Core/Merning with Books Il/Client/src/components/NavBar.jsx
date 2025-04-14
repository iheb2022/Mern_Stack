import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = ({title}) => {
    return (
    <div>
			<nav style={{ padding: "10px",border:"5px solid black",background:"#C1C1C1" }}>
				<div style={{display: "flex",justifyContent: "space-between",alignItems: "center"}}>
					<div style={{display: "flex",alignItems: "center",flexDirection:"column",gap:10}}>
						<Link className="btn btn-primary"to={"/"}style={{marginRight: "15px",textDecoration: "none",color: "white",}}>Catalog</Link>
						<Link className="btn btn-primary"to={"/create"}style={{ textDecoration: "none", color: "white" }}>Add Book</Link>
					</div>
					<div className="mr-2">
						<h1 style={{margin: 0}}>{title}</h1>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar