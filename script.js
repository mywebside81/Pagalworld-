async function searchAndPlay() {
  const query = document.getElementById("songInput").value.trim();
  if (!query) {
    alert("Please enter a song name.");
    return;
  }

  try {
    const response = await fetch(`https://corsproxy.io/?https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
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
  } catch (err) {
    console.error("Error fetching YouTube data:", err);
    alert("Unable to load video. Try again later.");
  }
}
