import React from 'react';
import './textComponents.css';

export function Paragraph(props) {
	return <p>{props.children}</p>;
}

export function SubHeaderText(props) {
	return <h2>{props.children}</h2>;
}

export function HeaderText(props) {
	return <h1>{props.children}</h1>;
}

export function BulletList(props) {
	return <ul>{props.children}</ul>;
}

export function BulletItem(props) {
	return <li className='bullet-item'>{props.children}</li>;
}
