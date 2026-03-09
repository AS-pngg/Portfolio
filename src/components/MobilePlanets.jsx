export default function MobilePlanets() {
  const planets = [
    { src: "/1.jpg", radius: 120, speed: 28, delay: 0 },
    { src: "/2.jpg", radius: 170, speed: 40, delay: 3 },
    { src: "/3.jpg", radius: 210, speed: 33, delay: 6 },
    { src: "/4.jpg", radius: 260, speed: 50, delay: 10 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {planets.map((planet, i) => (
        <div
          key={i}
          className="orbit"
          style={{
            "--orbit-radius": `${planet.radius}px`,
            animation: `orbit ${planet.speed}s linear infinite`,
            animationDelay: `${planet.delay}s`,
          }}
        >
          <img src={planet.src} className="planetOrbit" />
        </div>
      ))}
    </div>
  );
}