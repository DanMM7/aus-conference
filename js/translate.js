async function translateText(text, targetLanguage) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Google Translate API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage
        })
    });
    
    const data = await response.json();
    return data.data.translations[0].translatedText;
}

async function translateContent() {
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');
    
    const translatedTitle = await translateText(titleElement.innerText, 'fr');
    const translatedContent = await translateText(contentElement.innerText, 'fr');
    
    titleElement.innerText = translatedTitle;
    contentElement.innerText = translatedContent;
}