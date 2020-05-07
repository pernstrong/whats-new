import React from 'react'
import Menu from './Menu'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Menu', () => {
    it('should display some buttons', () => {
        const { getByText } = render(<Menu />)

        expect(getByText('Local News')).toBeInTheDocument()
        expect(getByText('Entertainment')).toBeInTheDocument()
        expect(getByText('Science')).toBeInTheDocument()
    })

    it('should run filterNewsType when a button is clicked and have the correct input for news type', () => {
        const mockFilterNewsType = jest.fn()
        const { getByText } = render(<Menu selectNewsType={mockFilterNewsType}/>)

        fireEvent.click(getByText('Technology'))

        expect(mockFilterNewsType).toHaveBeenCalledWith('technology')
    })
})