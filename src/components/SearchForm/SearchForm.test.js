import React from 'react'
import SearchForm from './SearchForm'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('NewsArticle', () => {
    it('displays a header', () => {

        const { getByText } = render(<SearchForm />)

        expect(getByText('What\'s New')).toBeInTheDocument()
    })

    it('has a placeholder in the search input', () => {

        const { getByPlaceholderText } = render(<SearchForm />)

        expect(getByPlaceholderText('search articles')).toBeInTheDocument()
    })

    it('should display the correct search value as the user searchs', () => {
        const { getByPlaceholderText, getByText } = render(<SearchForm />)

        fireEvent.change(getByPlaceholderText('search articles'), {target: {value: 'fake news'}})

        expect(getByPlaceholderText('search articles').value).toEqual('fake news')
    })

    it('should submit a search with the correct input', () => {
        const mockSubmitSearch = jest.fn()
        const { getByPlaceholderText, getByText } = render(<SearchForm submitSearch={mockSubmitSearch}/>)

        fireEvent.change(getByPlaceholderText('search articles'), {target: {value: 'fake news'}})
        fireEvent.click(getByText('SEARCH'))

        expect(mockSubmitSearch).toHaveBeenCalledWith('fake news')
    })


})