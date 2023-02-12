import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import fetchImages from 'components/Api/Api';
import LoadMore from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';
    

class App extends Component {
    
    state = {
        name: '',
        items: [],
        page: 1,
        error: null,
        loading: false,
        totalHits: 0,
    };

    async componentDidUpdate(prevProps, prevState) {
        const { name, page } = this.state;
        if (prevState.name !== name || prevState.page !== page) { 
            this.setState({ loading: true });
            try {
                const images = await fetchImages(name, page);
                this.setState({ totalHits: images.totalHits });
                if (images.totalHits === 0) {
                    throw new Error();
                }
                this.setState(prev => ({ items: [...prev.items, ...images.hits] }));
            } catch (error) {
                this.setState({ error });
            } finally {
                this.setState({ loading: false });
             }
        }

    }

    onChangePage = () => { 
        this.setState(prevPage => ({ page: prevPage.page + 1 }));
    };

    getNameSearch = name => { 
        if (name === '') { 
            toast.error('Enter text in search');
            return;
        }
        this.setState({ name, items: [], error: null, page: 1 });
    }; 
 

    render() {
        const { items, error, loading, totalHits } = this.state;
        const isShowBtn = items.length < totalHits;

        return (
            <Container>
                <Searchbar onSubmit={this.getNameSearch} />
                <ImageGallery items={items} />
                {loading && (
                    <ThreeDots
                        visible={true}
                height="80"
                width="80"
                radius="9"
                color="#3f51b5"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                    />
                )}
                {error && <p>Reload the page.</p>}
                {isShowBtn && <LoadMore changePage={this.onChangePage} />}
                <Toaster position="top-left" />
            </Container>    
        );
    }
}

export default App;