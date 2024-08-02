import { useState } from 'react';
import { SECTOR_LIST } from '../../common/constants';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] =
    useState<{ name: string; value: string }[]>(SECTOR_LIST);
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    { name: string; value: string }[]
  >([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 4) {
      setFilteredSuggestions(
        suggestions.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion.name);
    // setSuggestions([]);
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        className='w-full border p-1.5'
        placeholder='Digite algo...'
      />
      {filteredSuggestions.length > 0 &&
        filteredSuggestions.length < 40 &&
        inputValue.length > 1 && (
          <ul className='absolute h-16 w-full overflow-auto text-sm z-10 bg-stone-300'>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default AutocompleteInput;
