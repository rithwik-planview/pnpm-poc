import './App.css';
import Feature1 from '@unity/features.feature-1/App';

const App = () => {
    return (
        <div className="content">
            <h1>Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <div className="container">
                <Feature1 />
            </div>
        </div>
    );
};

export default App;
