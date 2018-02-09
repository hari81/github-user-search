import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const SearchBar = ({ onChangeValue }) => {
	return (
		<FormControl type="text" placeholder="type Github Username" onChange={onChangeValue} />
	)
}

SearchBar.propTypes = {
	onChangeValue: PropTypes.func.isRequired
};

export default SearchBar;