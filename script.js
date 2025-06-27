async function searchAndPlay() {
  const query = document.getElementById("songInput").value.trim();
  if (!query) {
    alert("Please enter a song name.");
    return;
  }

  try {
    const searchURL = `https://corsproxy.io/?https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    const response = await fetch(searchURL);
    const html = await response.text();
    const videoIdMatch = html.match(/"videoId":"(.*?)"/);

    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      const iframe = document.getElementById("ytplayer");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      document.getElementById("player").style.display = "block";
    } else {
      alert("No video found.");
    }
  } catch (error) {
    alert("Error fetching video. Please try again later.");
    console.error(error);
  }
}
