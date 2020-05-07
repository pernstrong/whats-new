import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
    it('should display the correct article when a user searches', () => {
        const { getByText, getByPlaceholderText } = render(<App />)

        fireEvent.change(getByPlaceholderText('search articles'), {target: {value: 'the who'}})
        fireEvent.click(getByText('SEARCH'))

        expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument()
    })
})
