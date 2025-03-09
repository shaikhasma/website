<video id="study-video" width="600" controls>
  <source src="YOUR_VIDEO_URL.mp4" type="video/mp4">
</video>

<script type="module">
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

  const db = getFirestore();
  const video = document.getElementById("study-video");

  video.addEventListener("timeupdate", async () => {
    await setDoc(doc(db, "users", "USER_ID"), { watchedTime: video.currentTime });
  });
</script>
