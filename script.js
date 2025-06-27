const apiKey = "AIzaSyDwBomzqzYKbfIGBO4gsoot_pv-iXza9ys"; // ✅ Your API Key

async function searchAndPlay() {
  const query = document.getElementById("songInput").value.trim();
  if (!query) {
    alert("Please enter a song name.");
    return;
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=1&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      const iframe = document.getElementById("ytplayer");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      document.getElementById("player").style.display = "block";
    } else {
      alert("No video found.");
    }
  } catch (err) {
    console.error("YouTube API error:", err);
    alert("Something went wrong. Check console for details.");
  }
}
