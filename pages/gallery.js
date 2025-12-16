export default function Gallery() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Gallery</h1>

      <h2>Photos</h2>
      <img
        src="/m-braids.jpg"
        alt="Braids style"
        style={{ width: "300px", margin: "10px", borderRadius: "12px" }}
      />
      <img
        src="/royal-braids.jpg"
        alt="Royal braids"
        style={{ width: "300px", margin: "10px", borderRadius: "12px" }}
      />

      <h2 style={{ marginTop: "30px" }}>Videos</h2>
      <video
        src="/mitchell-braids.mp4"
        controls
        style={{ width: "320px", margin: "10px", borderRadius: "12px" }}
      />
      <video
        src="/braidss.mp4"
        controls
        style={{ width: "320px", margin: "10px", borderRadius: "12px" }}
      />
      <video
        src="/royal-strands-braids.mp4"
        controls
        style={{ width: "320px", margin: "10px", borderRadius: "12px" }}
      />
      <video
        src="/cmr.mp4"
        controls
        style={{ width: "320px", margin: "10px", borderRadius: "12px" }}
      />
    </div>
  );
}
