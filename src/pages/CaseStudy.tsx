import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudy() {
    const { id } = useParams();
    const study = caseStudies.find((cs) => cs.id === id);

    if (!study) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-black text-white px-6">
                <div>
                    <p className="text-white/70 mb-4">Case study not found.</p>
                    <Link to="/" className="text-white underline">Back home</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white px-6 py-16 md:py-24">
            <div className="max-w-2xl mx-auto">
                <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block">&larr; Back</Link>
                <h1 className="text-[28px] md:text-[36px] font-bold leading-[1.15] tracking-tight mt-4">
                    {study.title}
                </h1>
                <p className="mt-8 text-lg font-normal leading-relaxed text-white/70">
                    {study.intro}
                </p>
                {study.sections.map((section, i) => (
                    <p key={i} className="mt-6 text-lg font-normal leading-relaxed text-white/70">
                        {section.text}
                    </p>
                ))}
            </div>
        </main>
    );
}
