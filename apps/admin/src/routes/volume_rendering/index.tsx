const VolumeRendering = () => {
    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
                    <h1 className="text-4xl font-bold mb-4 text-brand">Hello UnoCSS 👋</h1>
                    <button className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-blue-600 transition">
                        Click Me
                    </button>
                    <div className="mt-6 text-4xl text-gray-600 i-carbon-sun"></div>
                    <p className="text-lg text-gray-500 mt-4">Utility-first, On-demand CSS</p>
                </div>
            </section>
        </>
    );
};

export default VolumeRendering;