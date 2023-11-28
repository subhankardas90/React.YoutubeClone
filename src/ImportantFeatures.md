- Don't use Index as Key 
- Used generateRandomName and makeRandomMessage to generate the live chat
- Used GOOGLE_API_KEY from google t access the Youtube APIs , need to update if it expires
- https://console.cloud.google.com/apis/dashboard?project=my-project-react-test-406302&supportedpurview=project
- youtube APIS - https://developers.google.com/youtube/v3/docs/search/list
- To overcome the CORS issue i have used 
    fetch("https://cors-anywhere.herokuapp.com/"+YOUTUBE_SEARCH_API+searchQuery, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
    }})

- There is debouncing feature in Live chat, I have used in the search, while typing it will do api call after 200ms only. 
- There is an API pooling feature in Live Chat
- There is a nested comment feature implemented