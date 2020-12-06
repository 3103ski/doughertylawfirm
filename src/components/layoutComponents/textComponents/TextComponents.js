import React from 'react';
import './textComponents.css';

export function Paragraph({ children, ...restProps }) {
	return <p {...restProps}>{children}</p>;
}

export function SubHeaderText({ children, ...restProps }) {
	return <h2 {...restProps}>{children}</h2>;
}

export function HeaderText({ children, ...restProps }) {
	return <h1 {...restProps}>{children}</h1>;
}

export function BulletList({ children, ...restProps }) {
	return <ul {...restProps}>{children}</ul>;
}

export function BulletItem({ children, ...restProps }) {
	return (
		<li {...restProps} className='bullet-item'>
			{children}
		</li>
	);
}
