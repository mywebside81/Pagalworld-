function searchPagalworld() {
  const song = document.getElementById("songInput").value.trim();
  if (!song) {
    alert("Please enter a song name");
    return;
  }
  // Use verified domain: pagalworldmusic.com
  const url = `https://pagalworldmusic.com/search/${encodeURIComponent(song)}`;
  window.open(url, "_blank");
}
