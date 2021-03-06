export function Dropdown ({ handleChange }) {
  return (
      <div className="dropdown" data-testid="dropdown-test">
          <label htmlFor="Categories"></label>
          <select onChange={handleChange} name="categories" id="Categories">
            <option className="dropdown-option" >All</option>
            <option className="dropdown-option" >React</option>
            <option className="dropdown-option" >Jest</option>
            <option className="dropdown-option" >Git</option>
          </select>
      </div>
  )
}