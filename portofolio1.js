document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    
    if (!query) {
        document.getElementById('search-results').innerText = "Please enter a search term.";
        return;
    }

    // Use DuckDuckGo API for fetching search results
    const apiUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            // Process the JSON data here
            console.log(data);
            // e.g.  displayResults(data);
        })
        .catch(error => {
            console.error("Fetch Error:", error);
            // handle error (e.g.  displayErrorMessage(error.message));
        });
            return response.json();
        })
        .then(data => {
            const results = data.RelatedTopics;

            if (!results || results.length === 0) {
                document.getElementById('search-results').innerText = "No results found.";
                return;
            }

            // Generate HTML for search results
            const resultHTML = results
                .map(item => {
                    // Ensure the item has necessary properties
                    if (item.FirstURL && item.Text) {
                        return <p><a href="${item.FirstURL}" target="_blank">${item.Text}</a></p>;
                    }
                    return '';
                })
                .join('');

            document.getElementById('search-results').innerHTML = resultHTML || "No valid results found.";
        })
        .catch(error => {
            console.error("Error fetching search results:", error);
            document.getElementById('search-results').innerText = "An error occurred. Please try again.";
        });

        
        

