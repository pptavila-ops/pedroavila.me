import React from 'react';

interface LogEntry {
    id: string;
    title: string;
    date: string;
    link: string;
}

const logs: LogEntry[] = [
    {
        id: '1',
        title: 'Product development is now a conversation',
        date: '2025-04-27',
        link: '#'
    },
    {
        id: '2',
        title: 'Knekting strings of thought',
        date: '2024-09-21',
        link: '#'
    },
    {
        id: '3',
        title: 'The Fight Club of Design Content',
        date: '2024-03-14',
        link: '#'
    },
    {
        id: '4',
        title: 'Babe, wake up. A new Twitter clone just launched',
        date: '2023-07-06',
        link: '#'
    },
    {
        id: '5',
        title: 'A sprinkle of nihilism',
        date: '2023-06-07',
        link: '#'
    },
    {
        id: '6',
        title: 'Can AI make truly user friendly designs?',
        date: '2023-04-04',
        link: '#'
    }
];

const Logs: React.FC = () => {
    return (
        <section>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {logs.map((log) => (
                    <article key={log.id}>
                        <a href={log.link} style={{ display: 'block', textDecoration: 'none' }}>
                            <h2 style={{ fontSize: '1rem', fontWeight: 400, margin: 0, color: '#111' }}>{log.title}</h2>
                            <span className="date">{log.date}</span>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Logs;
