export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'cbfceb2776msh1657c0933ca3296p1ed3b2jsn5fb02e6cc77e',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  })
  const result = await response.json()
  return result
}