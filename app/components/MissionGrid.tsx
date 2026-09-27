type Mission = { id: string; slug: string; monster: string; location: string; items: string[] };

function toneFor(id: string) {
  const number = Number(id.slice(1));
  if (number <= 9) return "mint";
  if (number <= 18) return "sky";
  return "violet";
}

export default function MissionGrid({ missions }: { missions: Mission[] }) {
  return (
    <div className="mission-grid">
      {missions.map((mission) => (
        <a href={`/missions/${mission.slug}`} className={`mission-card ${toneFor(mission.id)}`} key={mission.id}>
          <div className="mission-card-top"><span className="mission-number">{mission.id}</span><span className="mission-arrow">↗</span></div>
          <p className="mission-place">{mission.location}</p><h3>{mission.monster}</h3>
          <div className="mission-tags">{mission.items.slice(0, 3).map((item) => <span key={item}>{item}</span>)}{mission.items.length > 3 && <span>+{mission.items.length - 3}</span>}</div>
        </a>
      ))}
    </div>
  );
}

