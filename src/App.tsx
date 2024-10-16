import './tailwind.tw.css';
//import ProviderButton from 'component1/button';
import ViteButton from 'viteRemote/button';
//import Theme from 'viteRemote/theme';


const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        {/* <ProviderButton size="large" type="ok">
          TEST
        </ProviderButton>
         */}

        <ViteButton size="large" type="ok">
          TEST
        </ViteButton>
      </div>
      {/* <div>
        <Theme serviceCode={"generic"} form={ 
          { 
            sections: {
              elements: [
                {
                  type: "header",
                  label: "Hello World",
                },
                {
                  type: "short_text",
                  label: "Descriptions",
                  require: false
                }
              ]
            }
          }}  /> 
      </div>*/}
    </div>
  );
};

export default App;
