/** @format */

export default function ImageZoom({ image }) {
  return (
    <>
      <div
        className="Overlay ZoomableImage-overlay"
        style={{ opacity: 1 }}
      ></div>
      <img
        src={image}
        className="ZoomableImage-image"
        style={{
          width: 500,
          height: 413,
          left: 710,
          top: 110,
          transform: "translate(0px, 0px) scale(1)",
          opacity: 1,
        }}
      />
    </>
  );
}
