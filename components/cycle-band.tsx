/**
 * Interim stand-in for the parts-macro photograph (Arafat, 2026-07-03):
 * a vapour-compression cycle drawn as a technical figure. High side in
 * copper, low side in ice — the palette story, literally. Replaced by the
 * real photo in macro-band.tsx when it exists. Decorative; no AI/stock
 * photography per CLAUDE.md §2.
 */
export function CycleBand() {
  const label = "font-mono fill-steel-dim tracking-[0.18em]";
  const copper = "fill-none stroke-copper/60";
  const ice = "fill-none stroke-ice/50";
  return (
    <div className="relative h-[clamp(220px,32vw,380px)] w-full overflow-hidden bg-[#0E1317]">
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        {/* High side: compressor discharge → condenser → expansion valve */}
        <path
          className={copper}
          vectorEffect="non-scaling-stroke"
          d="M 1060 130 V 84 Q 1060 70 1046 70 H 660 M 540 70 H 154 Q 140 70 140 84 V 142"
        />
        {/* Low side: expansion valve → evaporator → compressor suction */}
        <path
          className={ice}
          vectorEffect="non-scaling-stroke"
          d="M 140 178 V 236 Q 140 250 154 250 H 540 M 660 250 H 1046 Q 1060 250 1060 236 V 190"
        />

        {/* Condenser (top) and evaporator (bottom): finned coils */}
        <rect className={copper} vectorEffect="non-scaling-stroke" x="540" y="48" width="120" height="44" />
        <polyline
          className={copper}
          vectorEffect="non-scaling-stroke"
          points="552,70 564,56 576,84 588,56 600,84 612,56 624,84 636,56 648,70"
        />
        <rect className={ice} vectorEffect="non-scaling-stroke" x="540" y="228" width="120" height="44" />
        <polyline
          className={ice}
          vectorEffect="non-scaling-stroke"
          points="552,250 564,236 576,264 588,236 600,264 612,236 624,264 636,236 648,250"
        />

        {/* Compressor (right): circle with inner sweep */}
        <circle className={ice} vectorEffect="non-scaling-stroke" cx="1060" cy="160" r="30" />
        <path
          className={copper}
          vectorEffect="non-scaling-stroke"
          d="M 1044 172 A 20 20 0 0 1 1076 148"
        />

        {/* Expansion valve (left): bowtie */}
        <path
          className={copper}
          vectorEffect="non-scaling-stroke"
          d="M 122 146 L 122 174 L 158 146 L 158 174 Z"
        />

        {/* Flow direction */}
        <path className={copper} vectorEffect="non-scaling-stroke" d="M 858 62 L 842 70 L 858 78" />
        <path className={copper} vectorEffect="non-scaling-stroke" d="M 148 104 L 140 120 L 132 104" />
        <path className={ice} vectorEffect="non-scaling-stroke" d="M 842 242 L 858 250 L 842 258" />
        <path className={ice} vectorEffect="non-scaling-stroke" d="M 1052 222 L 1060 206 L 1068 222" />

        {/* Component labels, inside the loop */}
        <text className={label} x="600" y="116" fontSize="11" textAnchor="middle">
          CONDENSER
        </text>
        <text className={label} x="600" y="212" fontSize="11" textAnchor="middle">
          EVAPORATOR
        </text>
        <text className={label} x="1014" y="164" fontSize="11" textAnchor="end">
          COMPRESSOR
        </text>
        <text className={label} x="186" y="164" fontSize="11" textAnchor="start">
          EXPANSION VALVE
        </text>
      </svg>
      <span className="absolute bottom-3 left-[clamp(20px,4vw,40px)] font-mono text-[10px] tracking-[0.2em] text-steel-dim">
        FIG. 01 — THE VAPOUR-COMPRESSION CYCLE
      </span>
    </div>
  );
}
