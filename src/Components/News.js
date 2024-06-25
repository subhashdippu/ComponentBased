import React, { Component } from 'react'
import NewsItems from './Newsitems'
export default class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=1&pageSize=5"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles
        })

    }
    handleNextbutton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page + 1}&pageSize=5`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles
        })
        this.setState({
            page: this.state.page + 1
        })
    }
    handlePrevbutton = () => {

    }
    render() {

        return (
            <div className='container'>
                <div className='row'>

                    <h1>News HeadLine</h1>
                    {this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4'>
                                <NewsItems desc={element.description} imageUrl={element.urlToImage} title={element.title} />
                            </div>
                        )
                    })}
                </div>
                <div className='d-flex justify-content-between'>

                    <button className='btn btn-primary' onClick={this.handleNextbutton}>&larr;</button>
                    <button className='btn btn-primary' onClick={this.handlePrevbutton}>&rarr;</button>
                </div>
            </div>


        )
    }
}
