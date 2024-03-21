
function CityInput({city, setCity, handleSubmit}) {

    return (
        <form onSubmit={handleSubmit} className="CityInputForm">
            <label htmlFor="city">Type a place:</label>
            <input
                type="text"
                placeholder="here"
                id="city"
                autoFocus
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="formBtn">Done</button>
        </form>
    )
}

export default CityInput