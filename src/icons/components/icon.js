import React from 'react'

function Icon(props) {
	const {
		color,
		size,
		height,
		view
	} = props
	return(
		<svg
		fill={props.color}
		width={size}
		height={height}
		viewBox={view}
		>
		{props.children}
		</svg>
		)
}
export default Icon;