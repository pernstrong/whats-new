import React from 'react'
import NewsContainer from './NewsContainer'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('NewsContainer', () => {

    it('should display articles', () => {
        const { getByText } = render(<NewsContainer selected={[{id: 3, headline: 'wow', description: 'nah uh', url: 'www.birdsarentreal.com'}]}
        />)

        expect(getByText('wow')).toBeInTheDocument()

    })

    it('should display a message if no articles match a search', () => {
        const { getByText } = render(<NewsContainer selected={[]}
        />)
        
        expect(getByText('No articles match your search...')).toBeInTheDocument()
    })
     it('should call the Apps reloadAllArticles method when there are no articles matching the search and the user clicks the Back to All Articles button', () => {
        const mockRefresh = jest.fn()
        const { getByText } = render(<NewsContainer refresh={mockRefresh} selected={[]}/>)

        fireEvent.click(getByText('Back to All Articles'))

        expect(mockRefresh).toHaveBeenCalled()
     })
})