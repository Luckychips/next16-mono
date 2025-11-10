import { Heatmap, WordView } from '../../components';

const Dashboard = () => {
    return (
        <>
            <section>
                <div>
                    <Heatmap />
                </div>
                <div>
                    <WordView />
                </div>
            </section>
        </>
    );
};

export default Dashboard;