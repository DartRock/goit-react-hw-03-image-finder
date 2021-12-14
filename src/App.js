// import s from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from './components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Button } from './components/common/Button/Button';
import { Modal } from './components/common/Modal/Modal';
import { nanoid } from 'nanoid';
import fetchImages from './services/api';
import Loader from 'react-loader-spinner';

const loaderStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

class App extends Component {
  state = {
    inputValue: '',
    images: [],
    totalImages: 0,
    page: 1,
    isLoading: false,
    modalImg: '',
    alt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await fetchImages(this.state.inputValue, this.state.page);
      const images = data.hits;
      const totalImages = data.totalHits;

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        totalImages: totalImages,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  submitHandler = value => {
    this.setState({
      inputValue: value,
      images: [],
      totalImages: 0,
      page: 1,
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onImageClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({ modalImg: e.target.dataset.image });
      this.setState({ alt: e.target.getAttribute('Alt') });
    }
  };

  onModalClose = () => {
    this.setState({ modalImg: '' });
    this.setState({ alt: '' });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.submitHandler} />

        <ImageGallery>
          {this.state.images.map(({ webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={nanoid()}
                previewImg={webformatURL}
                alt={tags}
                largeImageURL={largeImageURL}
                onImageClick={this.onImageClick}
              />
            );
          })}
        </ImageGallery>

        {this.state.modalImg !== '' && (
          <Modal
            image={this.state.modalImg}
            alt={this.state.alt}
            onModalClose={this.onModalClose}
          />
        )}

        {this.state.totalImages > 11 && !this.state.isLoading && (
          <Button onLoadMoreClick={this.onLoadMoreClick} />
        )}
        {this.state.isLoading && (
          <Loader
            type="Oval"
            color="#3f51b5"
            height={80}
            width={80}
            style={{ ...loaderStyle }}
          />
        )}
      </>
    );
  }
}

export default App;
