import { AutoComplete } from 'antd';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setPosition } from '../redux/PositionAction';


function SearchPlaces() {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const dispatch = useDispatch();

  const handleChange = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setPosition(dispatch, lat, lng);
  };

  return (
    <>
      <AutoComplete
        dataSource={status === 'OK' && data.map((item) => item.description)}
        value={value}
        onSelect={handleChange}
        onSearch={setValue}
        disabled={!ready}
        className='autocomplete-input'
        placeholder='Search'
        size='large'
        allowClear
      />
    </>
  );
}

export default SearchPlaces;
