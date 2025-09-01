// Add these headers to your OpenRouter API calls to get on the leaderboard

const openRouterHeaders = {
    "Authorization": "Bearer YOUR_OPENROUTER_API_KEY",
    "HTTP-Referer": "https://cruxagi.com",  // Your primary domain
    "X-Title": "CruxAGI",                   // Display name on rankings
    "Content-Type": "application/json"
};

// Example implementation for your existing OpenRouter integration:
async function cruxagiOpenRouterCall(messages, model = 'openai/gpt-3.5-turbo') {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: openRouterHeaders,
        body: JSON.stringify({
            model: model,
            messages: messages,
            // Your compression optimization here
        })
    });
    
    return response.json();
}

console.log('🚀 CruxAGI will now appear on OpenRouter leaderboards!');