import './App.css';
import Feature2 from '@unity/features.feature-2/App';

const App = () => {
    return (
        <div className="content">
            <h1>Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <div className="container">
                <Feature2 />
            </div>
        </div>
    );
};

export default App;
