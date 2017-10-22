import React from 'react';
import GalleryItem from './GalleryItem';
import RaisedButton from 'material-ui/RaisedButton';
    import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    container: {
        position: 'relative',
        height: '100%',
    },

    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '0.5rem 0.5rem 2.5rem 0.5rem',
        position: 'relative',
        overflowY: 'scroll',
        height: '100%',
    }
}
const defaultImages = [
    require('./assets/picture1.png'),
    require('./assets/picture2.png'),
    require('./assets/picture3.png'),
    require('./assets/picture4.png'),
    require('./assets/picture5.png'),
    require('./assets/picture6.png'),
    require('./assets/picture7.png'),
    require('./assets/picture8.png'),
    require('./assets/picture9.png'),

];

const Gallery = ({ images = defaultImages, onClose, onSelected }) => (
    <div style={styles.container}>        
        <h1>Choose your set!</h1>
    
    
    
    

    
    
  
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
        <RaisedButton secondary fullWidth onClick={onClose} label="Cancel" />
        <div style={styles.gallery}>        
            {images.map(image => <GalleryItem key={image} image={image} onSelected={onSelected}  />)}
        <h1>Good Choice!</h1>
        </div>
    </div>
)

export default Gallery;
