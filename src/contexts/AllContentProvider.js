import React from 'react';
import { AppContentProvider } from './appContext';

export default function AllContentProvider({ children, ...restProps }) {
	return <AppContentProvider>{children}</AppContentProvider>;
}
