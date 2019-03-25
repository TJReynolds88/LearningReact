import React, {Component} from 'react'
import {render} from 'react-dom'


let bookList = [
    {"title": "The Sun Rises", "author": "Ernest Hemingway", "pages:":260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages:":480},
    {"title": "Cat's Craddle", "author": "Kurt Vonnehut", "pages:":304}
]


const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )


}



class Library extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: open
        }

    }
    render (){
        const {books} = this.props
        return (
           
            <div>
                 <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                {books.map(
                    (book, i) =>
                    <Book 
                    key={i}
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}/>
                )}
            </div>
        )
    }

}





render(
    
    <Library books={bookList}/>
            , document.getElementById('root')
)

