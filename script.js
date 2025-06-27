function searchSong() {
  const song = document.getElementById("songInput").value.trim();
  if (!song) {
    alert("Please enter or say a song name");
    return;
  }
  const url = `https://www.pagalworldl.com/site_search?s=${encodeURIComponent(song)}`;
  window.open(url, "_blank");
}

// Voice Recognition
function startListening() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice recognition not supported in your browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'hi-IN'; // Use Hindi language
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = function () {
    alert("🎤 Speak the song name...");
  };

  recognition.onresult = function (event) {
    const song = event.results[0][0].transcript;
    document.getElementById("songInput").value = song;
    searchSong(); // auto search
  };

  recognition.onerror = function (event) {
    alert("Voice error: " + event.error);
  };

  recognition.start();
}
