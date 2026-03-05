import RainbowText from './components/RainbowText';

function App() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
            <div className="max-w-xl text-[32px] leading-[1.2] text-left font-bold tracking-tight">
                <RainbowText>
                    <p>
                        Enabling designers to ship
                        <br />
                        production-ready code.
                    </p>
                </RainbowText>
                <p>
                    Currently @<a href="https://www.hellofresh.com" target="_blank" rel="noreferrer" className="text-white underline">HelloFresh</a>.
                </p>
                <hr className="border-white/20 my-8" />
                <p className="text-xl font-medium leading-relaxed text-white/80">
                    Staff Product Designer based in Berlin. Exploring where design is heading next and bringing as many people as I can with me.
                </p>
            </div>
        </main>
    );
}

export default App;
