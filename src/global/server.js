const today = new Date().toISOString().slice(0, 10)
export const BASE_URL = "https://newsapi.org/v2/everything?q=tesla&from=" + today + "&sortBy=publishedAt&apiKey=47b47c0f69364838853964a9cdea7c77"

