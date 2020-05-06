import React from 'react'
import NewsArticle from './NewsArticle'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
    it('displays correct info', () => {
        const { getByText } = render(<NewsArticle 
                                        id={9}
                                        headline="Child Saves Murderer"
                                        img="http://foxnews.com/picture"
                                        description="A child saved a murderer...was it an accident?!?"
                                        url="www.birdsarentreal.com"
                                        />);
            
        expect(getByText("Murderer Saves Child")).toBeInTheDocument();
        // expect(getByText("Child Saves Murderer")).toBeInTheDocument();
        // expect(getByText("http://foxnews.com/picture")).toBeInTheDocument();
        // expect(getByText("A child saved a murderer...was it an accident?!?")).toBeInTheDocument();
        // expect(getByText("www.birdsarentreal.com")).toBeInTheDocument();
    })
})