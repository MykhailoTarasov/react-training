import { Container } from "./SearchBar.Styled";

const SearchBar = ({ filters: {topic, level }, onChangeFilter, onReset }) => {
  return (
    <Container>
      <input
        type="text"
        value={topic}
        onChange={evt => {
            onChangeFilter('topic', evt.target.value);
        }}
        placeholder="Filter by topic..."
      />
      <select
        value={level}
        onChange={evt => {
          onChangeFilter('level', evt.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={onReset}>Reset filters</button>
    </Container>
  );
};

export default SearchBar;
