const initialize = () => {
    const inputCity = document.getElementById('search_hotel')

    inputCity.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('city');

        fetch(`http://localhost:3000/${input.value}`)
            .then(response => response.json())
            .then(data => analyseData(data));
    })
}

document.addEventListener('DOMContentLoaded', initialize);