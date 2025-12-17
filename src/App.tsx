import RainbowText from './components/RainbowText';

function App() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
            <div className="text-[32px] leading-[1.2] text-left font-bold tracking-tight">
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
            </div>
        </main>
    );
}

export default App;
