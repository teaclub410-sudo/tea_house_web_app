function Steam() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + i * 8}%`,
    width: `${2 + Math.random() * 3}px`,
    height: `${40 + Math.random() * 60}px`,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 8}s`,
  }));

  return (
    <div className="steam-wrap">
      {particles.map(p => (
        <div key={p.id} className="steam-particle" style={{
          left: p.left, width: p.width, height: p.height,
          animationDuration: p.duration, animationDelay: p.delay,
        }} />
      ))}
    </div>
  );
}

export default Steam;