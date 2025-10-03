import React, { useEffect, useState } from "react";

function LatestVideo() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      const API_KEY = "AIzaSyBrco-IIrt-R7x2wAKMyIopCZP9B3J68wQ"; 
      const CHANNEL_ID = "UCfMC5U10JBoHiafovUTxexA"; 
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.items.length > 0) {
          const vid = data.items[0];
          setVideo({
            title: vid.snippet.title,
            videoId: vid.id.videoId,
            publishedAt: vid.snippet.publishedAt,
          });
        }
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };

    fetchLatestVideo();
  }, []);

  if (!video) return <p>Loading latest video...</p>;

  return (
    <div className="latest-video-container text-center" 
        style={{ marginBottom: "5px", border: "2px solid #ffb6c1", padding: "20px", borderRadius: "10px", backgroundColor: "#fff" }}>
      <h3 style={{ margin: "0 0 50px 0" }}>
        Uploaded on{" "}
        {new Date(video.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );


}

export default LatestVideo;
