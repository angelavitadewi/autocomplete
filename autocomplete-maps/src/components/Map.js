import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import SearchPlaces from './SearchPlaces';
import { connect } from 'react-redux';

function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  const { lat, lng } = props;
  return (
    <>
      <div className='places-container'>
        <SearchPlaces />
      </div>

      <GoogleMap zoom={10} center={{ lat, lng }} mapContainerClassName='map-container'>
        <MarkerF position={{ lat, lng }} />
      </GoogleMap>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lat: state.position.lat,
    lng: state.position.lng,
  };
};

export default connect(mapStateToProps, null)(Map);
