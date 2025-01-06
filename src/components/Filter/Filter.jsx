const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter Contacts:</label>
      <input
        id="filter"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
