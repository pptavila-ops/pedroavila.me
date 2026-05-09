export function SpecMachineDiagram() {
    const nodes = [
        { label: 'UX', angle: -90 },
        { label: 'Web', angle: 0 },
        { label: 'Data', angle: 90 },
        { label: 'Mobile', angle: 180 },
    ];

    const cx = 200;
    const cy = 200;
    const radius = 130;
    const centerR = 56;
    const nodeR = 38;

    return (
        <div className="mt-8 rounded-2xl border border-white/10 p-8 flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6 self-start">
                Spec-Machine · the repository at the center
            </p>

            <svg
                viewBox="0 0 400 400"
                className="w-full max-w-[420px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Spec-Machine as the central repository, connected to UX, Web, Data, and Mobile"
            >
                {nodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const cosA = Math.cos(rad);
                    const sinA = Math.sin(rad);
                    const gap = 10;
                    const x1 = cx + (centerR + gap) * cosA;
                    const y1 = cy + (centerR + gap) * sinA;
                    const x2 = cx + (radius - nodeR - gap) * cosA;
                    const y2 = cy + (radius - nodeR - gap) * sinA;
                    return (
                        <line
                            key={`line-${node.label}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="rgba(255,255,255,0.25)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                        />
                    );
                })}

                <circle
                    cx={cx}
                    cy={cy}
                    r={centerR}
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                />
                <text
                    x={cx}
                    y={cy - 4}
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="white"
                >
                    Spec
                </text>
                <text
                    x={cx}
                    y={cy + 14}
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="white"
                >
                    Machine
                </text>

                {nodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const x = cx + radius * Math.cos(rad);
                    const y = cy + radius * Math.sin(rad);
                    return (
                        <g key={`node-${node.label}`}>
                            <circle
                                cx={x}
                                cy={y}
                                r={nodeR}
                                fill="rgba(255,255,255,0.04)"
                                stroke="rgba(255,255,255,0.35)"
                                strokeWidth="1.5"
                            />
                            <text
                                x={x}
                                y={y + 5}
                                textAnchor="middle"
                                fontSize="14"
                                fontWeight="600"
                                fill="rgba(255,255,255,0.85)"
                            >
                                {node.label}
                            </text>
                        </g>
                    );
                })}
            </svg>

            <p className="mt-6 text-[15px] text-white/55 text-center max-w-[420px] leading-relaxed">
                Spec-Machine is the shared brain — the repository where every discipline contributes commands, skills, and context for AI to use across the company.
            </p>
        </div>
    );
}
